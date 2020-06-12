import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Velicina } from '../model/Velicina';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VelicinaService {
  private readonly VELICINA_URL = Routes.SERVER_URL+"/"+"velicina";
  dataChange: BehaviorSubject<Velicina[]> = new BehaviorSubject<Velicina[]>([]);

  constructor(private httpClient:HttpClient) { }
  
  getAllVelicina(): Observable<Velicina[]> {
    this.httpClient.get<Velicina[]>(this.VELICINA_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
  addVelicina(velicina:Velicina)
  {
      return this.httpClient.post(this.VELICINA_URL, velicina);
  }

  updateVelicina(velicina: Velicina)
  {
      return this.httpClient.put(this.VELICINA_URL+"/"+velicina.velicinaID,velicina);
  }

  deleteVelicina(velicina: Velicina) {
      return this.httpClient.delete(this.VELICINA_URL+"/"+velicina.velicinaID);
  }

  getVelicinaID(velicinaID:number) : Observable<Velicina>
  {
      return this.httpClient.get<Velicina>(this.VELICINA_URL+"/"+velicinaID);
  }
}
