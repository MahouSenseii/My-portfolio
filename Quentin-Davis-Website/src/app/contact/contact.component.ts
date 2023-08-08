import { Component } from '@angular/core';
import { ContactFormService } from '../services/contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  constructor(private contactFormService: ContactFormService) {}

  onFormSubmit() {
    this.contactFormService.submitForm(this.formData).subscribe(
      (response) => {
        console.log(response);
        // Handle success message or other actions on successful form submission
      },
      (error) => {
        console.error(error);
        // Handle error message or other actions on form submission failure
      }
    );
  }
}
