import { Component, OnInit, HostListener } from '@angular/core';
import { Plava } from '../models/Plava';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlavaService } from '../models/plava.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  // wordForm: FormGroup;
  game: Plava;
  answer: string;
  setColors: string[];
  lines: string[];
  letters: string[];
  indexLetter: number;

  constructor(private ps: PlavaService, private fb: FormBuilder) {
    this.setColors = [];
    this.game = new Plava;
    this.answer = '';
    this.lines = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
    this.letters = ['firstLetter', 'secondLetter', 'thirdLetter', 'fourthLetter', 'fifthLetter'];
    this.indexLetter = 0;
    /*this.wordForm = this.fb.group({
      answer: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[a-z]')]],
    })*/
  }

  ngOnInit(): void {
    this.getCurrentWord();
  
  }

  @HostListener('window:keydown', ['$event'])
  captureKey(event: KeyboardEvent): void {

    const pressedKey = event.key;
    console.log(`#${this.lines[this.game.tryied]}Line-${this.letters[this.indexLetter]}`);

    // verify if the pressed key is a letter (a-z, A-Z)
    if (/^[a-zA-Z]$/.test(pressedKey) && pressedKey.length == 1 && this.indexLetter < 5) {
      let fieldLetter = document.getElementById(`${this.lines[this.game.tryied]}Line-${this.letters[this.indexLetter]}`) as HTMLElement;

      fieldLetter.textContent = pressedKey.toUpperCase();
      this.answer += pressedKey.toLowerCase();
      this.indexLetter++;
      console.log(this.indexLetter);

    } else if (pressedKey === "Backspace" && this.indexLetter > 0) {

      this.indexLetter--;
      let fieldLetter = document.getElementById(`${this.lines[this.game.tryied]}Line-${this.letters[this.indexLetter]}`) as HTMLElement;
      fieldLetter.textContent = '';
      this.answer = this.answer.slice(0, -1);
      console.log(this.indexLetter);

    } else if ( pressedKey == "Enter" &&  this.answer.length === 5)
      this.tryAnswer();

  }

  getCurrentWord(): void {
    this.game.word = this.ps.getWord();
  }

  tryAnswer(){

    const block: string = this.lines[this.game.tryied];
    
    this.setColors = this.game.verify(this.answer);
    for ( let i = 0; i < 5; i++ ) {

      const line = document.querySelector(`.${block} #${block}Line-${this.letters[i]}`) as HTMLElement;
      line.style.backgroundColor = this.setColors[i];

    }
    
    //set zero to letters index
    this.indexLetter = 0;
    
    //set empty to answer
    this.answer = '';

  }

  newGame(): void{
    //define a new word to the game
    this.getCurrentWord();

    //set zero to letters index
    this.indexLetter = 0;

    //set empty to answer
    this.answer = '';

    //set zero to tryied
    this.game.tryied = 0;

    //set empty to letters squares
    for ( let j = 0; j < 6; j++ ){

      const block: string = this.lines[j];

      for ( let i = 0; i < 5; i++ ) {
        const line = document.querySelector(`.${block} #${block}Line-${this.letters[i]}`) as HTMLElement;
        line.style.backgroundColor = 'rgb(148, 175, 216)';
  
        line.innerText = '';
  
      }

    }

  }

}
