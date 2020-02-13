import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  meetings: any[] = [];
  allUsers: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.get('users')
      .subscribe((data: any) => {
        this.allUsers = data;
      })
  }

  ngOnInit() {
    this.apiService.get('meetings')
      .subscribe((data: any) => {  
        this.meetings = data;
      })  
	}
}
