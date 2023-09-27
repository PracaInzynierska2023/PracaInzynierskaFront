import { Component, OnInit } from '@angular/core';

import { Answer } from '../test/question/question.model';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.scss']
})
export class CapsuleComponent implements OnInit{
  color: string = '';
  style: string = '';

  colorAnalysis = [
    {id: 'Zima', val: 0},
    {id: 'Jesien', val: 0},
    {id: 'Lato', val: 0},
    {id: 'Wiosna', val: 0}
  ]

  styleAnalysis = [
    {id: 'Casual', val:0},
    {id: 'Francuski-Minimalizm', val:0},
    {id: 'Klasyczna-Elegancja', val:0},
    {id: 'Retro-Nowoczesny', val:0},
    {id: 'KobiecyGlamour', val:0},
  ]

  ngOnInit(): void {
    const answers = JSON.parse(localStorage.getItem('answers')!);

    answers.slice(0,7).map((ans: Answer) => {
      if(ans.type === 'Z') this.colorAnalysis[0].val++;
      if(ans.type === 'J') this.colorAnalysis[1].val++;
      if(ans.type === 'L') this.colorAnalysis[2].val++;
      if(ans.type === 'W') this.colorAnalysis[3].val++;
    })

    answers.slice(7).map((ans: Answer) => {
      if(ans.type === 'C') this.styleAnalysis[0].val++;
      if(ans.type === 'F') this.styleAnalysis[1].val++;
      if(ans.type === 'K') this.styleAnalysis[2].val++;
      if(ans.type === 'R') this.styleAnalysis[3].val++;
      if(ans.type === 'G') this.styleAnalysis[4].val++;

    });

    this.color = this.colorAnalysis.sort((a, b) => b.val - a.val )[0].id;
    this.style = this.styleAnalysis.sort((a, b) => b.val - a.val )[0].id;
  }

  downloadButtonClick():void {
    console.log(this.color + '_' + this.style);
  }
}
