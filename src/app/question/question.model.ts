export class Question {
  constructor(
    public id: number,
    public question: string,
    public answers: string[],
    public previousQuestionId: number,
    public nextQuestionId: number,
    public userAnswer?: string,
  ) {}
}
