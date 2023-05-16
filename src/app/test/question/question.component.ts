import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Answer, Question } from './question.model';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question | undefined;
  editMode: boolean = false;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.question = this.questionService.getQuestion(+params['id']);
      this.editMode = this.route.snapshot.url.length === 2;
    });

    this.questionService.questionsFetched.subscribe(() => {
      this.question = this.questionService.getQuestion(this.route.snapshot.params['id']); //When user accidentally refresh page
      this.editMode = this.route.snapshot.url.length === 2;
    })
  }

  onAnswerClick(answer: Answer): void {
    this.questionService.saveAnswer(this.question!.id, answer);
    if(this.editMode) return;
    if(this.question!.id === this.questionService.getQuestions().length-1) this.router.navigate(['/test/summary']);
    else this.router.navigate(['/test', (this.question!.id + 1).toString()]);
  }

  isChecked(answer:Answer):boolean {
    const answers = this.questionService.getAnswers();
    if(answers.length > this.question!.id) {
      if(answer.type === answers[this.question!.id].type) return true;
    }
    return false;
  }

}
