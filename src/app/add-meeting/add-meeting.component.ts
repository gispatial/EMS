import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit {
  newMeetingForm: any;
  attendees: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.newMeetingForm = this.formBuilder.group({
      subject: '',
      description: '',
      attendees: [],
    });
    this.apiService.get('users')
      .subscribe((data: any) => {
        this.attendees = data;
      })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.newMeetingForm.status === 'INVALID') return
    this.apiService.post('meetings', this.newMeetingForm.value)
      .subscribe((data) => {  
        this.newMeetingForm.reset();
        this.router.navigate(['/dashboard']);
      })
  }

  onCancel() {
    this.newMeetingForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
