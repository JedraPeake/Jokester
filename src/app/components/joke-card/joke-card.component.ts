import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent implements OnInit {

  @Input() jokeItem: Joke;
  @Output() jokeChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  likeJoke() {
    this.jokeItem.review = 1;
    this.updateJokeStorage();
  }

  dislikeJoke() {
    this.jokeItem.review = -1;
    this.updateJokeStorage();
  }

  updateJokeStorage() {
    this.jokeChange.emit();
  }

}
