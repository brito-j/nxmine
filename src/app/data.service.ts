import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('http://localhost/cgi-bin/nxmine/get-games.pl');
  }

  setGames(data: FormData) {
    return this.http.post('http://localhost/cgi-bin/nxmine/set-games.pl', data);
  }
}
