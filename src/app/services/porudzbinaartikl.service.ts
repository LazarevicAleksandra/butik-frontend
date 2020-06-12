import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Observable } from 'rxjs';
import { PorudzbinaArtikl } from '../model/PorudzbinaArtikl';

@Injectable()
export class PorudzbinaartiklService {
  private readonly PORUDZBINAARTIKL_URL = Routes.SERVER_URL+"/"+"PorudzbinaArtikl";
  constructor(private httpClient:HttpClient) { }
  getAllPorudzbinaArtikl()
  {
      return this.httpClient.get<PorudzbinaArtikl[]>(this.PORUDZBINAARTIKL_URL);
  }
  
  addPorudzbinaArtikl(porudzbinaartikl:PorudzbinaArtikl)
  {
      return this.httpClient.post(this.PORUDZBINAARTIKL_URL, porudzbinaartikl);
  }

  deletePorudzbinaArtikl(porudzbinaartikl: PorudzbinaArtikl) {
      return this.httpClient.delete(this.PORUDZBINAARTIKL_URL+"/"+porudzbinaartikl.porudzbinaID);
  }

  getPorudzbinaArtiklID(porudzbinaID:number) : Observable<PorudzbinaArtikl>
  {
      return this.httpClient.get<PorudzbinaArtikl>(this.PORUDZBINAARTIKL_URL+"/"+porudzbinaID);
  }
}
