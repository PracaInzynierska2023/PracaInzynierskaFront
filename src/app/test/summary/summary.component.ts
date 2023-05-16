import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { QuestionService } from '../question.service';
import { Answer, Question } from '../question/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  answers: Answer[] = [];
  questions: Question[] = [];
  constructor(private questionService: QuestionService, private router: Router) {}


  ngOnInit(): void {
    this.answers = this.questionService.getAnswers();
    this.questions = this.questionService.getQuestions();

    this.questionService.questionsFetched.subscribe(() => {
      this.questions = this.questionService.getQuestions(); //When user accidentally refresh page
      this.answers = this.questionService.getAnswers();
    })
  }

  onConfirmClick():void {
    this.router.navigate(['/capsule']);
  }

  onAnsClick(id: number): void {
    this.router.navigate(['/test', id, 'edit']);
  }
}
