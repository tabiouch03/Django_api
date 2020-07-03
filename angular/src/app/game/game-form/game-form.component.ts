import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  game: Game = {
    id: 0,
    name: '',
    genre: Object,
    cover: '',
    resume: ''
  }

  isSubmit = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  saveGame() {
    const data = {
      id: this.game.id,
      name: this.game.name,
      genre: this.game.genre,
      cover: this.game.cover,
      resume: this.game.resume
    }
    this.gameService.createGame(data).subscribe(result => {
      this.isSubmit = true;
    }, error => {
      console.log(error);
    });
  }

  newGame() {
    this.isSubmit = false;
    this.game = {
      id: 0,
      name: '',
      genre: Object,
      cover: '',
      resume: ''
    }
  }

}
