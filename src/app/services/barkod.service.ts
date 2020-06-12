import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { BarKod } from '../model/BarKod';
import { Observable } from 'rxjs';

@Injectable()
export class BarkodService {
  private readonly BARKOD_URL = Routes.SERVER_URL+"/"+"barkod";
  constructor(private httpClient:HttpClient) { }
  getAllBarKod()
  {
      return this.httpClient.get<BarKod[]>(this.BARKOD_URL);
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
