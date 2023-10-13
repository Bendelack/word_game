import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlavaService {
  //API's url
  URL: string;
  palavra: string;
  suffix: string;
  letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'z'];

  constructor(private http: HttpClient) {
    this.URL = 'https://api.dicionario-aberto.net/index.html/suffix';
    this.palavra = "AUDIO";
    this.suffix = '';
  }

  //get word from API
  getWord(): Observable<any> {
    let trySuffix: string[];
    let x: number;
    let inSuffix: string = 'sco';

    trySuffix = this.letters;

    return this.http.get(`${this.URL}/${inSuffix}`);
  }

  getPalavra(): string {
    return this.palavra;
  }
}
