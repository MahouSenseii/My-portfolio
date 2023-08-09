import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  pdfSrc = '/assets/resume.pdf';

  downloadPDF() {
    const fileName = 'Quentin_F_Davis_resume.pdf';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';

    fetch(this.pdfSrc).then(res => res.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
}
}
