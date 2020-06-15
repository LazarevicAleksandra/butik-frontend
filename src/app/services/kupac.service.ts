import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Kupac } from '../model/Kupac';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class KupacService {
  private readonly KUPAC_URL = Routes.SERVER_URL+"/Kupac";
  dataChange: BehaviorSubject<Kupac[]> = new BehaviorSubject<Kupac[]>([]);

  constructor(private httpClient:HttpClient) { }

 public getAllKupac(): Observable<Kupac[]> {
    this.httpClient.get<Kupac[]>(this.KUPAC_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
public addKupac(kupac: Kupac): void {
    this.httpClient.post(this.KUPAC_URL, kupac).subscribe();
  }
 
  public updateKupac(kupac: Kupac): void {
    this.httpClient.put(this.KUPAC_URL+"/"+kupac.kupacID,kupac).subscribe();
  }

  public deleteKupac(kupac: Kupac): void {
    this.httpClient.delete(this.KUPAC_URL+"/"+kupac.kupacID).subscribe();
  }
 public getKupacID(kupacID:number) : Observable<Kupac>
  {
      return this.httpClient.get<Kupac>(this.KUPAC_URL+kupacID);
  }
}
