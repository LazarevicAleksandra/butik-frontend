import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { BarKod } from '../model/BarKod';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class BarkodService {
  private readonly BARKOD_URL = Routes.SERVER_URL+"/"+"barkod";

  dataChange: BehaviorSubject<BarKod[]> = new BehaviorSubject<BarKod[]>([]);

  constructor(private httpClient:HttpClient) { }
  
  getAllBarKod(): Observable<BarKod[]> {
    this.httpClient.get<BarKod[]>(this.BARKOD_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  addBarKod(barkod:BarKod)
  {
      return this.httpClient.post(this.BARKOD_URL, barkod);
  }

  updateBarKod(barkod: BarKod)
  {
      return this.httpClient.put(this.BARKOD_URL+"/"+barkod.barKodID,barkod);
  }

  deleteBarKod(barkod: BarKod) {
      return this.httpClient.delete(this.BARKOD_URL+"/"+barkod.barKodID);
  }

  getBarKodID(barKodID:number) : Observable<BarKod>
  {
      return this.httpClient.get<BarKod>(this.BARKOD_URL+"/"+barKodID);
  }
}
