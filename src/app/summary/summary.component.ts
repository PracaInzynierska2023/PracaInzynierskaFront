import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  usersAnswers = this.questionService.usersAnswers;
  constructor(public questionService: QuestionService) {}

  ngOnInit(): void {
      this.questionService.updateUsersAnswers();
      this.usersAnswers = this.questionService.usersAnswers;
  }

  onEndTestClick(): void{
    localStorage.clear();
  }
}
