import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('http://localhost/cgi-bin/nxmine/get_games.pl');
  }
}
