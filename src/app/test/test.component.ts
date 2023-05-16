import { Component, OnInit} from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  loading: boolean = true;

  constructor(
    private questionService: QuestionService,
  ) {}

  ngOnInit(): void {
    this.questionService.fetchQuestions().subscribe(() => {
      this.loading = false
      this.questionService.questionsFetched.next('');
    });
    this.questionService.loadAnswers();
  }
}
