import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  downloadResume() {
    window.open('http://quentindportfolio.com/ServerSide/resume.pdf', '_blank');
  }
}
