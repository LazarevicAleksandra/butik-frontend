import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Racun } from '../model/Racun';
import { Routes } from '../constants/routes';

@Injectable()
export class RacunService {
  private readonly RACUN_URL = Routes.SERVER_URL+"/"+"Racun";
  constructor(private httpClient:HttpClient) { }
  getAllRacun()
  {
      return this.httpClient.get<Racun[]>(this.RACUN_URL);
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
