import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.scss']
})
export class TestStartComponent implements OnInit {
  testStarted: boolean = false;

  constructor(private questionService: QuestionService, private router: Router) {}

  ngOnInit(): void {
    const id = this.questionService.getCurrentQuestionId();
    this.testStarted = id === -1 ? false : true;
  }

  onResetTest(): void {
    this.questionService.resetAnswers();
  }

  onContinueButtonClick(): void {
    const id = this.questionService.getCurrentQuestionId();
    if(id === -2) this.router.navigate(['/test/summary']);
    else this.router.navigate(['/test', id.toString()]);
  }
}
