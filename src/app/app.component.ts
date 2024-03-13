import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  columns: any[] = [
    {header: 'First Name', field: 'fname', width: '150px'},
    {header: 'Last Name', field: 'lname', width: '150px'},
    {header: 'Email', field: 'emailid', width: '250px'}
  ];
  dataList: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.fechData();
  }

  fechData() {
    let url: string = 'assets/data.json';
    this.http.get<any>(url).subscribe(
      res => {
        console.log(res);
        if (res && res.data) {
          this.dataList = res.data;
        }
      }
    );
  }
}
