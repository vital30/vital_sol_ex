import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dbService: DataService){}
  params: any;
  rowData:any= [];
  dataFirstColumn:any= [];
  columns:any= [];
  isDisabledRow = true;


  ngOnInit(): void {
    this.dbService.getDatabase().subscribe(data =>{
      console.log(data);
      this.rowData = data;
      // Sort by AllList
      this.rowData.unshift(this.rowData.splice(this.rowData.findIndex((item:any) => item.isAllList), 1)[0])
    })
  }

  onGridReady(params:any) {
    this.params = params;
    params.api.forEachNodeAfterFilter();
    params.api.sizeColumnsToFit();
  }

  editRow(){
    this.isDisabledRow = !this.isDisabledRow;
  }

}
