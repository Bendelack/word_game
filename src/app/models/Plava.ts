export class Plava {

    tryied: number;
    word: string;

    constructor() {
        this.tryied = 0;
        this.word = '';
    }

    verify(answer: string): string[] {
        this.tryied++;
        let colors: string[] = [];
        let present: string = '';

        for (let i = 0; i < 5; i++) {

            if(answer[i] == this.word[i]){
                colors.push('green');
                present = present + answer[i];
            } else if ( this.word.includes(answer[i]) && !present.includes(answer[i]) ) {
                colors.push('yellow');
            } else {
                colors.push('gray');
            }

        }
	    return colors;

    }

}
