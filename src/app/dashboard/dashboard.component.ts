import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  meetings: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.get('meetings').subscribe((data: any[])=>{  
			console.log(data);  
			this.meetings = data;  
		})  
	}
}
