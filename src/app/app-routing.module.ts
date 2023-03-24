import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { QuestionComponent } from "./question/question.component";
import { TestComponent } from "./test/test.component";
import { TestStartComponent } from "./test-start/test-start.component"
import { SummaryComponent } from "./summary/summary.component";
import { FeedbackComponent } from "./feedback/feedback.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  {
    path: 'test',
    component: TestComponent,
    children: [
      { path: '', component: TestStartComponent, pathMatch: "full" },
      { path: 'summary', component: SummaryComponent },
      { path: ':id', component: QuestionComponent },
      { path: ':id/edit', component: QuestionComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
