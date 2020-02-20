import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.scss']
})
export class EditMeetingComponent implements OnInit {
  editMeetingForm: any;
  allUsers: any[] = [];
  meetingId: Number = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.editMeetingForm = this.formBuilder.group({
      subject: new FormControl(null, [Validators.required]),
      description: null,
      attendees: [],
      datetime: null,
    });
    this.meetingId = this.route.snapshot.params['id'];
    this.apiService.get('meetings/'+this.meetingId)
      .subscribe((data: any) => {
        this.editMeetingForm.setValue({
          subject: data.subject,
          description: data.description,
          attendees: data.attendees,
          datetime: data.datetime || new Date(),
        });
      })
    
    this.apiService.get('users')
      .subscribe((data: any) => {
        this.allUsers = data;
      })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.editMeetingForm.status === 'INVALID') return
    this.apiService.put('meetings/'+this.meetingId, this.editMeetingForm.value)
      .subscribe((data) => {  
        this.editMeetingForm.reset();
        this.router.navigate(['/dashboard']);
      })
  }

  onCancel() {
    this.editMeetingForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
