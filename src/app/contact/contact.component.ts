
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports:[FormsModule,CommonModule]
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  http: any;
currentYear: any;

  // Replace with your Google Sheets API endpoint
  //private googleSheetUrl = '';

  //constructor(private http: HttpClient) {}

  // Method to handle form submission
  submitForm() {
    const formData = {
      values: [[this.name, this.email, this.message]]
    };

    this.http.post(this.googleSheetUrl, formData).subscribe((response: any) => {
      console.log('Form submitted:', response);
      // Reset form fields after submission
      this.name = '';
      this.email = '';
      this.message = '';
    }, (error: any) => {
      console.error('Error submitting form:', error);
    });
  }
  googleSheetUrl(googleSheetUrl: any, formData: { values: string[][]; }) {
    throw new Error('Method not implemented.');
  }
}

