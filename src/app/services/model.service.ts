import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Model } from '../model/Model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ModelService {
  private readonly MODEL_URL = Routes.SERVER_URL+"/"+"Model";
  dataChange: BehaviorSubject<Model[]> = new BehaviorSubject<Model[]>([]);

  constructor(private httpClient:HttpClient) { }

  public getAllModel(): Observable<Model[]> {
    this.httpClient.get<Model[]>(this.MODEL_URL).subscribe(data => {
        this.dataChange.next(data);
    },
        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message)
        });
        return this.dataChange.asObservable();
}
  
public addModel(model: Model): void {
    this.httpClient.post(this.MODEL_URL, model).subscribe();
  }
 
  public updateModel(model: Model): void {
    this.httpClient.put(this.MODEL_URL+"/"+model.modelID,model).subscribe();
  }

  public deleteModel(model: Model): void {
    this.httpClient.delete(this.MODEL_URL+"/"+model.modelID).subscribe();
  }

  public getModelID(modelID:number) : Observable<Model>
  {
      return this.httpClient.get<Model>(this.MODEL_URL+"/"+modelID);
  }
}
