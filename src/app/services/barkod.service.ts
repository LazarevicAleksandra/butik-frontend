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
  
 public getAllBarKod(): Observable<BarKod[]> {
    this.httpClient.get<BarKod[]>(this.BARKOD_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
 public addBarKod(barKod: BarKod): void {
    this.httpClient.post(this.BARKOD_URL, barKod).subscribe();
  }
 
  public updateBarKod(barKod: BarKod): void {
    this.httpClient.put(this.BARKOD_URL+"/"+barKod.barKodID,barKod).subscribe();
  }

  public deleteBarKod(barKod: BarKod): void {
    this.httpClient.delete(this.BARKOD_URL+"/"+barKod.barKodID).subscribe();
  }


  public getBarKodID(barKodID:number) : Observable<BarKod>
  {
      return this.httpClient.get<BarKod>(this.BARKOD_URL+"/"+barKodID);
  }
}
