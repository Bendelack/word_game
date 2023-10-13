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
  wordGroup: Plava[];
  word: string;

  constructor(private ps: PlavaService, private fb: FormBuilder) {
    this.wordGroup = [];
    this.word = '';
    this.wordForm = this.fb.group({
      answer: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[a-zA-Z_ ]')]],
    })
  }

  ngOnInit(): void {
    this.getCurrentWord();
  }

  getCurrentWord() {
      
    this.ps.getWord().subscribe(ans => {

      this.wordGroup = ans;
      console.log(this.wordGroup);
      
    })
    
  }

}
