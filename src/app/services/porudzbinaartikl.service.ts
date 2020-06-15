import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Observable, BehaviorSubject } from 'rxjs';
import { PorudzbinaArtikl } from '../model/PorudzbinaArtikl';

@Injectable()
export class PorudzbinaartiklService {
  private readonly PORUDZBINAARTIKL_URL = Routes.SERVER_URL+"/"+"PorudzbinaArtikl";
  dataChange: BehaviorSubject<PorudzbinaArtikl[]> = new BehaviorSubject<PorudzbinaArtikl[]>([]);

  constructor(private httpClient:HttpClient) { }
  
  getAllPorudzbinaArtikl(): Observable<PorudzbinaArtikl[]> {
    this.httpClient.get<PorudzbinaArtikl[]>(this.PORUDZBINAARTIKL_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
public addPorudzbinaArtikl(porudzbinaartikl: PorudzbinaArtikl): void {
    this.httpClient.post(this.PORUDZBINAARTIKL_URL, porudzbinaartikl).subscribe();
  }
 

  public deletePorudzbina(porudzbinaartikl: PorudzbinaArtikl): void {
    this.httpClient.delete(this.PORUDZBINAARTIKL_URL +"/"+ porudzbinaartikl.porudzbinaID).subscribe();
  }

  getPorudzbinaArtiklID(porudzbinaID:number) : Observable<PorudzbinaArtikl>
  {
      return this.httpClient.get<PorudzbinaArtikl>(this.PORUDZBINAARTIKL_URL+"/"+porudzbinaID);
  }
}
