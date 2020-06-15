import { Injectable } from '@angular/core';
import { Routes } from '../constants/routes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Artikl } from '../model/Artikl';

@Injectable()
export class ArtiklService {
  private readonly ARTIKL_URL = Routes.SERVER_URL+"/"+"Artikl";
  dataChange: BehaviorSubject<Artikl[]> = new BehaviorSubject<Artikl[]>([]);

  constructor(private httpClient:HttpClient) { }
 public getAllArtikl(): Observable<Artikl[]> {
    this.httpClient.get<Artikl[]>(this.ARTIKL_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
public addArtikl(artikl: Artikl): void {
    this.httpClient.post(this.ARTIKL_URL, artikl).subscribe();
  }
 
  public updateArtikl(artikl: Artikl): void {
    this.httpClient.put(this.ARTIKL_URL+"/"+artikl.artiklID,artikl).subscribe();
  }

  public deleteArtikl(artikl: Artikl): void {
    this.httpClient.delete(this.ARTIKL_URL+"/"+artikl.artiklID).subscribe();
  }

 public getArtiklID(artiklID:number) : Observable<Artikl>
  {
      return this.httpClient.get<Artikl>(this.ARTIKL_URL+"/"+artiklID);
  }
}
