import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  question?: Question;
  form: FormGroup = new FormGroup({
    options: new FormControl('', Validators.required)
  });
  constructor(private route: ActivatedRoute, private questionService: QuestionService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.question = {...this.questionService.getQuestion(+params['id'])}
    });

    this.form.valueChanges.subscribe(changes => {
      this.question!.userAnswer = changes.options;
      console.log(this.form.value);
    })
  }

  onSubmit():void {
    this.form.reset();
  }
}
