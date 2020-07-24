import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { JokeApiService } from '../../services/joke-api.service';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke-parent',
  templateUrl: './joke-parent.component.html',
  styleUrls: ['./joke-parent.component.css']
})
export class JokeParentComponent implements OnInit {

  private jokeList = new BehaviorSubject<Joke[]>([]);
  constructor(private jokeApiSvc: JokeApiService) { }

  ngOnInit(): void {
    this.jokeApiSvc.getJokes().subscribe(res => this.jokeList.next(res));
  }
}
