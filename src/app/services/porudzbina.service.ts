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

  public getAllPorudzbina(): Observable<Porudzbina[]> {
    this.httpClient.get<Porudzbina[]>(this.PORUDZBINA_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
public addPorudzbina(porudzbina: Porudzbina): void {
    this.httpClient.post(this.PORUDZBINA_URL, porudzbina).subscribe();
  }
 
  public updatePorudzbina(porudzbina: Porudzbina): void {
    this.httpClient.put(this.PORUDZBINA_URL+"/"+porudzbina.porudzbinaID,porudzbina).subscribe();
  }

  public deletePorudzbina(porudzbina: Porudzbina): void {
    this.httpClient.delete(this.PORUDZBINA_URL+"/"+ porudzbina.porudzbinaID).subscribe();
  }


 public getPorudzbinaID(porudzbinaID:number) : Observable<Porudzbina>
  {
      return this.httpClient.get<Porudzbina>(this.PORUDZBINA_URL+"/"+porudzbinaID);
  }
}
