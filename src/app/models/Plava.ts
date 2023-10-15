export class Plava {

    tryied: number;
    word: string;
    private correct: string = 'green';
    private present: string = 'yellow';
    private missing: string = 'gray';

    constructor() {
        this.tryied = 0;
        this.word = '';
    }

    verify(answer: string): string[] {
        this.tryied++;
        let colors: string[] = [];

        for (let i = 0; i < 5; i++) {

            if(answer[i] == this.word[i]){
                colors.push('green');
            } else if ( this.word.includes(answer[i]) ) {
                colors.push('yellow');
            } else {
                colors.push('gray');
            }

        }
	    return colors;

    }

}
