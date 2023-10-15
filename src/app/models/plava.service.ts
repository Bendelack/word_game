import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { words } from "./words";

@Injectable({
  providedIn: 'root'
})
export class PlavaService {
  //API's url
  URL: string;
  palavra: string;
  suffix: string;
  letters: string[] = ['a', 'b', 'e', 'c', 'i', 'd', 'o', 'f', 'u', 'g', 'a', 'h', 'e',  'j', 'i', 'k', 'o', 'l', 'u', 'm', 'a', 'n', 'e',  'p', 'i', 'q', 'o', 'r', 'u', 's', 'a', 't', 'e',  'v', 'i', 'x', 'o', 'z', 'u'];

  constructor(private http: HttpClient) {
    this.URL = 'https://api.dicionario-aberto.net/index.html/suffix';
    this.palavra = "AUDIO";
    this.suffix = '';
  }

  //get word from API
  getWord(): string {

    let x = parseInt(`${Math.random() * words.length}`);

    return words[x];

  }

  getPalavra(): string {
    return this.palavra;
  }
}
