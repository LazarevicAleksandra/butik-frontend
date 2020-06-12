import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { BehaviorSubject, Observable } from 'rxjs';
import { Radnik } from '../model/Radnik';

@Injectable({
  providedIn: 'root'
})
export class RadnikService {
  private readonly RADNIK_URL = Routes.SERVER_URL+"/"+"Radnik";
  dataChange: BehaviorSubject<Radnik[]> = new BehaviorSubject<Radnik[]>([]);

  constructor(private httpClient:HttpClient) { }
  
  getAllRadnik(): Observable<Radnik[]> {
    this.httpClient.get<Radnik[]>(this.RADNIK_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  addRadnik(radnik:Radnik)
  {
      return this.httpClient.post(this.RADNIK_URL, radnik);
  }

  updateRadnik(radnik: Radnik)
  {
      return this.httpClient.put(this.RADNIK_URL+"/"+radnik.radnikID,radnik);
  }

  deleteRadnik(radnik: Radnik) {
      return this.httpClient.delete(this.RADNIK_URL+"/"+radnik.radnikID);
  }

  getRadnikID(radnikID:number) : Observable<Radnik>
  {
      return this.httpClient.get<Radnik>(this.RADNIK_URL+"/"+radnikID);
  }
}
