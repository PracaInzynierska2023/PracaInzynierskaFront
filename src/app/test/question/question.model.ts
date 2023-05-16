export class Question {
  constructor(
    public id: number,
    public question: string,
    public answers: Answer[]
  ) {}
}

export class Answer {
  public type: string = '';
  public text: string = '';

  constructor(answer: string) {
    this.type = answer.slice(0,1);
    this.text = answer.slice(3);
  }
}
