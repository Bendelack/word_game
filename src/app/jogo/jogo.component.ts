import { Component, OnInit } from '@angular/core';
import { Plava } from '../models/Plava';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlavaService } from '../models/plava.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  wordForm: FormGroup;
  // wordGroup: Plava;
  game: Plava;
  setColors: string[];
  lines: string[] = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  letters: string[] = ['firstLetter', 'secondLetter', 'thirdLetter', 'fourthLetter', 'fifthLetter'];

  constructor(private ps: PlavaService, private fb: FormBuilder) {
    this.setColors = [];
    this.game = new Plava;
    this.wordForm = this.fb.group({
    answer: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)/*, Validators.pattern('[a-z]')*/]],
    })
  }

  ngOnInit(): void {
    this.getCurrentWord();
  }

  getCurrentWord() {
    this.game.word = this.ps.getWord();
  }

  tryAnswer(forms: FormGroup){
    console.log("try: " + forms.value.answer);
    const block: string = this.lines[this.game.tryied];
    
    this.setColors = this.game.verify(forms.value.answer);
    for ( let i = 0; i < this.setColors.length; i++ ) {
      const line = document.querySelector(`.${block} #${block}Line-${this.letters[i]}`) as HTMLElement;
      line.style.backgroundColor = this.setColors[i];

      line.innerText = forms.value.answer[i];



      console.log(this.setColors[i]);
    }
  }

  newGame(){
    this.getCurrentWord();
  }
}
