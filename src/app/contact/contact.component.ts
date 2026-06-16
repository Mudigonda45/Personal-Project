
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  successMessage = '';
  errorMessage = '';
  loading = false;
  gmailScopeError = false;
  emailDocsLink = 'https://www.emailjs.com/docs/examples/send-email-with-gmail-api/';

  constructor() {
    // Initialize EmailJS with your public key so it's ready before sending
    try {
      emailjs.init('XsXhTfh-bmigHqags');
    } catch (e) {
      console.warn('emailjs.init warning', e);
    }
  }

  submitForm() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.name || !this.email || !this.message) {
      this.errorMessage = 'Please fill in all required fields before sending your message.';
      return;
    }

    this.loading = true;

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      subject: this.subject || 'Project Inquiry',
      message: this.message
    };

    emailjs
      .send('service_4yw8c4c', 'template_7mz7nmt', templateParams, 'XsXhTfh-bmigHqags')
      .then((response) => {
        this.loading = false;
        this.successMessage = 'Message sent successfully. Thank you!';
        this.errorMessage = '';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      })
      .catch((error) => {
        this.loading = false;
        console.error('Email send failed', error);
        // Detect Gmail API authentication scope errors and show actionable advice
        const text = (error && (error.text || error.message)) || '';
        if (text.includes('Gmail_API') || text.includes('insufficient authentication scopes')) {
          this.gmailScopeError = true;
          this.errorMessage = 'Email send failed: Gmail account not authorized. Please reconfigure the Gmail integration in EmailJS or use SMTP.';
        } else {
          this.errorMessage = 'Failed to send message. Please try again later.';
        }
        this.successMessage = '';
      });
  }

  openMailClient() {
    const subject = encodeURIComponent(this.subject || 'Project Inquiry');
    const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`);
    const mailto = `mailto:2001mohansai@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }
}

