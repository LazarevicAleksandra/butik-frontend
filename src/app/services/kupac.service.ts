import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Kupac } from '../model/Kupac';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class KupacService {
  private readonly KUPAC_URL = Routes.SERVER_URL+"Kupac";
  dataChange: BehaviorSubject<Kupac[]> = new BehaviorSubject<Kupac[]>([]);

  constructor(private httpClient:HttpClient) { }

  getAllKupac(): Observable<Kupac[]> {
    this.httpClient.get<Kupac[]>(this.KUPAC_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
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
