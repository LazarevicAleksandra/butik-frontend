import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../constants/routes';
import { Model } from '../model/Model';
import { Observable } from 'rxjs';

@Injectable()
export class ModelService {
  private readonly MODEL_URL = Routes.SERVER_URL+"/"+"Model";
  constructor(private httpClient:HttpClient) { }
  getAllModel()
  {
      return this.httpClient.get<Model[]>(this.MODEL_URL);
  }
  
  addModel(model:Model)
  {
      return this.httpClient.post(this.MODEL_URL, model);
  }

  updateModel(model: Model)
  {
      return this.httpClient.put(this.MODEL_URL+"/"+model.modelID,model);
  }

  deleteModel(model: Model) {
      return this.httpClient.delete(this.MODEL_URL+"/"+model.modelID);
  }

  getModelID(modelID:number) : Observable<Model>
  {
      return this.httpClient.get<Model>(this.MODEL_URL+"/"+modelID);
  }
}
