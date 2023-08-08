import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjecthunterComponent } from './projecthunter/projecthunter.component';
import { FirstfiveComponent } from './firstfive/firstfive.component';
import { WebsiteComponent } from './website/website.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'projects',  component: ProjectsComponent},
  {path: 'resume', component:  ResumeComponent},
  { path: 'contact', component: ContactComponent },
  {path: 'projectHunter', component: ProjecthunterComponent},
  {path: 'firstFive', component:FirstfiveComponent},
  {path: 'portfolio', component:WebsiteComponent}         
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // <- useHash set to true
  exports: [RouterModule]

})
export class AppRoutingModule { }
