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
  
 public getAllVelicina(): Observable<Velicina[]> {
    this.httpClient.get<Velicina[]>(this.VELICINA_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
public addVelicina(velicina: Velicina): void {
    this.httpClient.post(this.VELICINA_URL, velicina).subscribe();
  }
 
  public updateVelicina(velicina: Velicina): void {
    this.httpClient.put(this.VELICINA_URL+"/"+velicina.velicinaID,velicina).subscribe();
  }

  public deleteVelicina(velicina: Velicina): void {
    this.httpClient.delete(this.VELICINA_URL+"/"+velicina.velicinaID).subscribe();
  }
  public getVelicinaID(velicinaID:number) : Observable<Velicina>
  {
      return this.httpClient.get<Velicina>(this.VELICINA_URL+"/"+velicinaID);
  }
}
