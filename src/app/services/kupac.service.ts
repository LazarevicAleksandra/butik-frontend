import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Kupac } from '../model/Kupac';
import { Observable } from 'rxjs';

@Injectable()
export class KupacService {
  private readonly KUPAC_URL = Routes.SERVER_URL+"Kupac";
  constructor(private httpClient:HttpClient) { }
  getAllKupac()
  {
      return this.httpClient.get<Kupac[]>(this.KUPAC_URL);
  }
  
  addKupac(kupac:Kupac)
  {
      return this.httpClient.post(this.KUPAC_URL, kupac);
  }

  updateKupac(kupac: Kupac)
  {
      return this.httpClient.put(this.KUPAC_URL,kupac);
  }

  deleteKupac(kupac: Kupac) {
      return this.httpClient.delete(this.KUPAC_URL+kupac.kupacID);
  }

  getKupacID(kupacID:number) : Observable<Kupac>
  {
      return this.httpClient.get<Kupac>(this.KUPAC_URL+kupacID);
  }
}
