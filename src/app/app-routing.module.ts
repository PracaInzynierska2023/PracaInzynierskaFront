import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";
import { CapsuleComponent } from "./capsule/capsule.component";
import { TestStartComponent } from "./test/test-start/test-start.component";
import { QuestionComponent } from "./test/question/question.component";
import { SummaryComponent } from "./test/summary/summary.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'capsule', component: CapsuleComponent },
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full'},
      { path: 'start', component: TestStartComponent},
      { path: 'summary', component: SummaryComponent},
      { path: ':id', component: QuestionComponent},
      { path: ':id/edit', component: QuestionComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
