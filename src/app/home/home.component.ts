import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private dbService: DataService, private translate: TranslateService) {
    translate.setDefaultLang('he');
  }

  rowData:any= [];
  dataFirstColumn:any= [];
  columns:any= [];
  isDisabledRow = true;
  isDirectionLTR = false;

  ngOnInit(): void {
    this.dbService.getDatabase().subscribe(data =>{
      console.log(data);
      this.rowData = data;
      // Sort by AllList
      this.rowData.unshift(this.rowData.splice(this.rowData.findIndex((item:any) => item.isAllList), 1)[0])
    })

  }

  editRow(){
    this.isDisabledRow = !this.isDisabledRow;
  }

  changeDirection(value:any){
    value = value.toLowerCase();
    this.isDirectionLTR = !this.isDirectionLTR;
    this.translate.use(value);

  }

}
