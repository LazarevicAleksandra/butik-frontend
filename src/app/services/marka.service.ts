import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Marka } from '../model/Marka';
import { Observable } from 'rxjs';

@Injectable()
export class MarkaService {
  private readonly MARKA_URL = Routes.SERVER_URL+"/"+"Marka";
  constructor(private httpClient:HttpClient) { }
  getAllMarka()
  {
      return this.httpClient.get<Marka[]>(this.MARKA_URL);
  }
  
  addMarka(marka:Marka)
  {
      return this.httpClient.post(this.MARKA_URL, marka);
  }

  updateMarka(marka: Marka)
  {
      return this.httpClient.put(this.MARKA_URL+"/"+marka.markaID,marka);
  }

  deleteMarka(marka: Marka) {
      return this.httpClient.delete(this.MARKA_URL+"/"+marka.markaID);
  }

  getMarkaID(markaID:number) : Observable<Marka>
  {
      return this.httpClient.get<Marka>(this.MARKA_URL+"/"+markaID);
  }
}
