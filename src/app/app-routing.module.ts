import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { QuestionComponent } from "./question/question.component";
import { TestComponent } from "./test/test.component";
import { TestStartComponent } from "./test-start/test-start.component"

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: '',
        component: TestStartComponent,
        pathMatch: "full",
      },
      {
        path: ':id',
        component: QuestionComponent
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
