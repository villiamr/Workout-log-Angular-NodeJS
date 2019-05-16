import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
  providers: [DatePipe]
})
export class GetComponent implements OnInit {
  workouts: any;
  panelOpenState = false;
  myDate = new Date();
  chart = [];



  constructor(private http: HttpClient, private datePipe: DatePipe) { 
  }

  ngOnInit() {
      this.http.get('http://localhost:4000/api').subscribe(data => {
      this.workouts = data;
      console.log(data);

     // this.dataSource.paginator = this.MatPaginator;
    });
  }
  
}
