import { Injectable } from '@angular/core'
import { Question } from './question.model'


@Injectable({providedIn: 'root'})
export class QuestionService {
  questions: Question[] =
    [
      new Question(0, 'Wybierz plec', ['K', 'M'], -1, 1),
      new Question(1, 'Wybierz kolor włosów', ['blond', 'brunet'], 0, 2),
      new Question(2, 'Wybierz wzrost', ['160-170', '170-180', '180-190'], 1, 3),
      new Question(3, 'Wybierz karnacje', ['jasna', 'ciemna'], 2, 4),
      new Question(4, 'Wybierz Kolor Oczu', ['niebieski', 'zielony', 'brązowy', 'piwny'], 3, -1),
    ]

  getQuestions(): Question[] {
    return this.questions.slice();
  }

  getQuestion(id: number): Question {
    return this.questions.slice()[id];
  }
}
