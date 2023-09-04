import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingGifsService {

  private apiKey = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';
  private url = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { } 

  getGifsData(startIndex: any, recordsPerPage: any) {
    return this.http.get(`${this.url}/trending`, {
      params: {
        api_key: this.apiKey,
        offset: startIndex,
        limit: recordsPerPage
      }
    });
  }

  searchData(query: any, startIndex: any, recordsPerPage: any) {
    return this.http.get(`${this.url}/search`, {
      params: {
        api_key: this.apiKey,
        q: query,
        offset: startIndex,
        limit: recordsPerPage
      }
    });
  }
}


