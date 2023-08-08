import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private apiUrl = 'https://quentindportfolio.com/ServerSider/contactform.php';

  constructor(private http: HttpClient) { }

  submitForm(contactForm: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.apiUrl, contactForm, httpOptions);
  }
}
