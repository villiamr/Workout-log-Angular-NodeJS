import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  workouts: any;
  panelOpenState = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://localhost:4000/api').subscribe(data => {
      this.workouts = data;
      console.log(data);
    });
  }
}
