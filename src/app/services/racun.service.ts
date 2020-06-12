import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Racun } from '../model/Racun';
import { Routes } from '../constants/routes';

@Injectable()
export class RacunService {
  private readonly RACUN_URL = Routes.SERVER_URL+"/"+"Racun";
  dataChange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);

  constructor(private httpClient:HttpClient) { }

  getAllRacun(): Observable<Racun[]> {
    this.httpClient.get<Racun[]>(this.RACUN_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
  addRacun(racun:Racun)
  {
      return this.httpClient.post(this.RACUN_URL, racun);
  }

  updateRacun(racun: Racun)
  {
      return this.httpClient.put(this.RACUN_URL+"/"+racun.racunID,racun);
  }

  deleteRacun(racun: Racun) {
      return this.httpClient.delete(this.RACUN_URL+"/"+racun.racunID);
  }

  getRacunID(racunID:number) : Observable<Racun>
  {
      return this.httpClient.get<Racun>(this.RACUN_URL+"/"+racunID);
  }
}
