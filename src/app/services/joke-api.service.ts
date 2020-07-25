import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})

export class JokeApiService {

  jokeList$ = new BehaviorSubject<Joke[]>([]);

  constructor(private http: HttpClient) { }

  getJokes() {
    this.http.get<Joke[]>('https://official-joke-api.appspot.com/random_ten')
      .pipe(take(1))
      .subscribe(res => this.jokeList$.next(res));

    return this.jokeList$;
  }

  updateJokeItem(item: Joke) {
    let currentJokes = this.jokeList$.getValue();

    this.jokeList$.next(currentJokes);
  }
}
