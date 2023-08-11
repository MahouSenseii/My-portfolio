import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.sendMail(this.formData);
  }

  sendMail(data: any) {
    this.http.post('m07.internetmailserver.net', data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
