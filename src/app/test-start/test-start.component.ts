import { Component } from '@angular/core';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.scss']
})
export class TestStartComponent {
  currentQuestionId = localStorage.getItem('currentQuestionId');
  testStarted = this.currentQuestionId ? true : false;

  onResetTest():void {
    localStorage.clear();
  }
}
