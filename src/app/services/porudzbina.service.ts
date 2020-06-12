import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Porudzbina } from '../model/Porudzbina';
import { Routes } from '../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {
  private readonly PORUDZBINA_URL = Routes.SERVER_URL+"/"+"Porudzbina";
  dataChange: BehaviorSubject<Porudzbina[]> = new BehaviorSubject<Porudzbina[]>([]);

  constructor(private httpClient:HttpClient) { }

  getAllPorudzbina(): Observable<Porudzbina[]> {
    this.httpClient.get<Porudzbina[]>(this.PORUDZBINA_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
  addPorudzbina(porudzbina:Porudzbina)
  {
      return this.httpClient.post(this.PORUDZBINA_URL, porudzbina);
  }

  updatePorudzbina(porudzbina: Porudzbina)
  {
      return this.httpClient.put(this.PORUDZBINA_URL+"/"+porudzbina.porudzbinaID,porudzbina);
  }

  deletePorudzbina(porudzbina: Porudzbina) {
      return this.httpClient.delete(this.PORUDZBINA_URL+"/"+porudzbina.porudzbinaID);
  }

  getPorudzbinaID(porudzbinaID:number) : Observable<Porudzbina>
  {
      return this.httpClient.get<Porudzbina>(this.PORUDZBINA_URL+"/"+porudzbinaID);
  }
}
