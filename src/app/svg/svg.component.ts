import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  constructor(){}
  @Input() rowListData: any;

  isAllList:any;
  isDynamic:any;
  isEmptyList:any;

  ngOnInit(): void {
      this.isAllList = this.rowListData.isAllList;
      this.isDynamic = this.rowListData.isDynamic;
      this.isEmptyList = this.rowListData.state.total;
  }

}
