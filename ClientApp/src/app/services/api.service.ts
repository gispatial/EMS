import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public get(url: String = null) {  
		return this.httpClient.get(`${this.SERVER_URL}/${url}`);
  }
  
  public post(url: String = null, data: any = {}) {   
		return this.httpClient.post(`${this.SERVER_URL}/${url}`, data);
  }
  
  public put(url: String = null, data: any = {}) {   
		return this.httpClient.put(`${this.SERVER_URL}/${url}`, data);
	}
}