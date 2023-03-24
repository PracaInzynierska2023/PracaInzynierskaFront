import { Component, OnInit } from '@angular/core';

import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  loading: boolean = true;
  constructor(private questionsService: QuestionService) {}

  ngOnInit(): void {
      this.questionsService.getQuestionsNumber();
      this.questionsService.fetchQuestions().subscribe(() => { this.loading = false });
  }
}
