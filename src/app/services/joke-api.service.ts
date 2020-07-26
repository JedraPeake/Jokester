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
    const localStorageItem = this.getLocalStorage();
    if (localStorageItem != null) {
      this.jokeList$.next(localStorageItem);
    } else {
      this.http.get<Joke[]>('https://official-joke-api.appspot.com/random_ten')
        .pipe(take(1))
        .subscribe(res => {
          res.push(this.getFavouriteJoke());

          this.jokeList$.next(res);
          this.setLocalStorage(res);
        });
    }

    return this.jokeList$;
  }

  setLocalStorage(jokes: Joke[]) {
    localStorage.setItem('jokeStorage', JSON.stringify(jokes));
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('jokeStorage'));
  }

  getFavouriteJoke() {
    const favouriteJoke = new Joke();
    favouriteJoke.id = -1;
    favouriteJoke.punchline = 'One was assaulted';
    favouriteJoke.setup = 'Two peanuts were walking down the street';
    favouriteJoke.review = 0;

    return favouriteJoke;
  }
}
