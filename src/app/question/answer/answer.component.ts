import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Input() nextQuestionId: number = 0;
  @Input() questionId: number = 0;
  @Input() text: string = '';
  @Input() editMode: boolean = false;
  routerLinkArray = ['/test', ];
  checked: boolean = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    if(!this.editMode) {
      this.routerLinkArray[1] = ((this.nextQuestionId !== -1) ? this.nextQuestionId.toString() : 'summary');
    } else {
      this.routerLinkArray[1] = this.questionId.toString();
      this.routerLinkArray[2] = 'edit'
    }
    this.checked = this.isChecked();
  }

  onAnswerClick():void {
    localStorage.setItem(this.questionId.toString(), this.text);
    this.questionService.usersAnswers![this.questionId] = this.text;
    if(!this.editMode) {
      if(this.questionId === 6) {
        localStorage.setItem('currentQuestionId', 'summary');
      } else {
        localStorage.setItem('currentQuestionId', (this.questionId + 1).toString())
      }
    }

  }

  isChecked(): boolean {
    const lS = localStorage.getItem(this.questionId.toString());
    if(lS) {
      if(this.text === lS) {
        return true
      }
    }
    return false;
  }
}
