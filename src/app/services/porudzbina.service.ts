import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Porudzbina } from '../model/Porudzbina';
import { Routes } from '../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {
  private readonly PORUDZBINA_URL = Routes.SERVER_URL+"/"+"Porudzbina";
  constructor(private httpClient:HttpClient) { }
  getAllPorudzbina()
  {
      return this.httpClient.get<Porudzbina[]>(this.PORUDZBINA_URL);
  }
  
  addPorudzbina(porudzbina:Porudzbina)
  {
      return this.httpClient.post(this.PORUDZBINA_URL, porudzbina);
  }

  updatePorudzbina(porudzbina: Porudzbina)
  {
      return this.httpClient.put(this.PORUDZBINA_URL+"/"+porudzbina.porudzbinaID,porudzbina);
  }

  deletePorudzbina(porudzbina: Porudzbina) {
      return this.httpClient.delete(this.PORUDZBINA_URL+"/"+porudzbina.porudzbinaID);
  }

  getPorudzbinaID(porudzbinaID:number) : Observable<Porudzbina>
  {
      return this.httpClient.get<Porudzbina>(this.PORUDZBINA_URL+"/"+porudzbinaID);
  }
}
