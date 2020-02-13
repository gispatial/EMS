import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {
  newMeetingForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.newMeetingForm = this.formBuilder.group({
      subject: '',
      description: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data: Object) {
    console.warn('Your order has been submitted', data);
    this.newMeetingForm.reset();
    this.router.navigate(['/dashboard']);

  }

  onCancel() {
    this.newMeetingForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
