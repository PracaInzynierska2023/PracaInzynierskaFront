import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  question?: Question;
  questionsNumber?: number;
  editMode: boolean = false;
  routerLinkArray = ['/test'];
  constructor(private route: ActivatedRoute, private questionService: QuestionService) {}

  ngOnInit(): void {
    const regex = new RegExp('edit')
    this.editMode = regex.test(this.route.snapshot.url.toString());
    this.route.params.subscribe((params) => {
      this.question = this.questionService.getQuestion(+params['id'])
      this.questionsNumber = this.questionService.questionsNumber;
      this.routerLinkArray[1] = ((this.question.nextQuestionId !== -1) ? this.question.nextQuestionId.toString() : '0');
    });
  }

  trackAnswer(index: number, answer: string) {
    return new Date().getTime();
  }
}
