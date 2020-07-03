import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: [ './game-update.component.css' ]
})
export class GameUpdateComponent implements OnInit {
  // variable pour récup le getbyid et l'injecter dans le form pour le update
  // je recupère le produit par l'id
  dataGame = null;

  isSubmit = false;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGameById(this.route.snapshot.paramMap.get('id'));
  }

  getGameById(id) {
    this.gameService.getGameById(id).subscribe(
      (game) => {
        this.dataGame = game;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  updateGame() {
    // recupère les valeur du formulaire
    const data = {
      name: this.dataGame.name,
      genre: this.dataGame.genre,
      cover: this.dataGame.cover,
      resume: this.dataGame.resume
    };

    const id = this.dataGame.id;

    this.gameService.updateGame(data, id).subscribe(
      () => {
        this.isSubmit = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}