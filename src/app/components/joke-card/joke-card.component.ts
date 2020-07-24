import { Component, OnInit, Input } from '@angular/core';

import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent implements OnInit {

  @Input() jokeItem: Joke;
  constructor() { }

  ngOnInit(): void {
  }

}
