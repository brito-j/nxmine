import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  //gets all game statistics data from the database
  getGames() { return this.http.get('http://localhost/cgi-bin/nxmine/get-games.pl'); }

  //saves new game statistics data to the database
  setGames(data: FormData)
    { return this.http.post('http://localhost/cgi-bin/nxmine/set-games.pl', data); }
}
