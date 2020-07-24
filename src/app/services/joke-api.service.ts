import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})

export class JokeApiService {

  constructor(private http: HttpClient) { }

  getJokes() {
    return this.http.get<Joke[]>('https://official-joke-api.appspot.com/random_ten')
      .pipe(take(1));
  }
}
