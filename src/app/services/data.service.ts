import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  // AUTH API URLS

  baseUrl = '../assets/data.json'


  getDatabase(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  

}
