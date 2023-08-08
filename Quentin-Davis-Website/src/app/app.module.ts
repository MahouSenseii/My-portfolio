import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ProjecthunterComponent } from './projecthunter/projecthunter.component';
import { FirstfiveComponent } from './firstfive/firstfive.component';
import { WebsiteComponent } from './website/website.component'; // <-- And this

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    ProjecthunterComponent,
    FirstfiveComponent,
    WebsiteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // <-- make sure this is here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
