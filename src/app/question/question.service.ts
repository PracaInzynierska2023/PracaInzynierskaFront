import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Question } from './question.model';

const QUESTIONS_URL = 'https://praca-inzynierska-89067-default-rtdb.europe-west1.firebasedatabase.app/questions.json';

@Injectable({providedIn: 'root'})
export class QuestionService {
  questions?: Question[];
  questionsNumber?: number;
  usersAnswers?: (string | null)[] = ['','','','','','',''];

  constructor(private http: HttpClient) {}

  getQuestions(): Question[] {
    return this.questions!.slice();
  }

  getQuestion(id: number): Question {
    return this.questions!.slice()[id];
  }

  updateUsersAnswers(): void {
    const usersAnswersHelp = ['','','','','','','']
    this.usersAnswers = usersAnswersHelp.map((answer, index) => (localStorage.getItem(index.toString())) ? localStorage.getItem(index.toString()) : '')
  }

  getQuestionsNumber(): void {
    this.http.get<Question[]>(QUESTIONS_URL).pipe(
      tap(
        (questions) => {
          this.questionsNumber = questions.length;
        }
      )
    ).subscribe();
  }

  fetchQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(QUESTIONS_URL)
      .pipe(
        tap(
          (quests) => {
            this.questions = quests.map((question) => {
              return new Question(question.id, question.question, question.answers, question.previousQuestionId, question.nextQuestionId,);
            })
          }
        )
      )
  }
}
