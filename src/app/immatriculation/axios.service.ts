import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  data: any;

  constructor() { }

  callApi() {
    const options = {
      method: 'GET',
      url: 'https://api-siv-systeme-d-immatriculation-des-vehicules.p.rapidapi.com/AM766SQ',
      headers: {
        'X-RapidAPI-Key': 'e0a424cf1cmsh006116fcd91a2bdp1a1c3ejsn70d7d9c5ff07',
        'X-RapidAPI-Host': 'api-siv-systeme-d-immatriculation-des-vehicules.p.rapidapi.com'
      }
    };

    return axios.request(options);
  }
}
