import { Injectable } from '@angular/core';
import { Routes } from '../constants/routes';
import { HttpClient } from '@angular/common/http';
import { Artikl } from '../model/Artikl';
import { Observable } from 'rxjs';

@Injectable()
export class ArtiklService {
  private readonly ARTIKL_URL = Routes.SERVER_URL+"/"+"Artikl";

  constructor(private httpClient:HttpClient) { }
  getAllArtikl()
  {
      return this.httpClient.get<Artikl[]>(this.ARTIKL_URL);
  }
  
  addArtikl(artikl:Artikl)
  {
      return this.httpClient.post(this.ARTIKL_URL, artikl);
  }

  updateArtikl(artikl: Artikl)
  {
      return this.httpClient.put(this.ARTIKL_URL+"/"+artikl.artiklID,artikl);
  }

  deleteArtikl(artikl: Artikl) {
      return this.httpClient.delete(this.ARTIKL_URL+"/"+artikl.artiklID);
  }

  getArtiklID(artiklID:number) : Observable<Artikl>
  {
      return this.httpClient.get<Artikl>(this.ARTIKL_URL+"/"+artiklID);
  }
}
