import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {
  newMeetingForm: any;

  constructor(
    private formBuilder: FormBuilder,
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
  }

}
