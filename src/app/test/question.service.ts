import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

import { Answer, Question } from './question/question.model';

const QUESTIONS_URL = 'https://praca-inzynierska-89067-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

@Injectable({providedIn: 'root'})
export class QuestionService {

  private questions: Question[] = [];
  private answers: Answer[] = [];

  questionsFetched = new Subject();

  constructor(private http: HttpClient) {}

  getQuestions(): Question[] {
    return this.questions.slice();
  }

  getAnswers(): Answer[] {
    return this.answers.slice();
  }

  getQuestion(id: number): Question {
    return this.questions.slice()[id];
  }

  saveAnswer(questionId: number, answer: Answer): void {
    this.answers[questionId] = answer;
    localStorage.clear();
    localStorage.setItem('answers', JSON.stringify(this.answers));
  }

  resetAnswers(): void {
    this.answers = [];
    localStorage.clear();
  }

  getCurrentQuestionId(): number {
    if(!localStorage.getItem('answers')) return -1; // if test wasn't started yet
    if(this.answers.length === this.questions.length) return -2; // if user left at summary

    return this.answers.length - 1; // return question id
  }

  fetchQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(QUESTIONS_URL)
      .pipe(
        tap(
          (quests) => {
            this.questions = quests.map((question) => {
              const answers = question.answers.map((ans) => new Answer(ans as any))
              return new Question(question.id, question.question, answers);
            });
          }
        )
      )
  }

  loadAnswers(): void {
    if(localStorage.getItem('answers')) this.answers = JSON.parse(localStorage.getItem('answers')!);
  }
}
