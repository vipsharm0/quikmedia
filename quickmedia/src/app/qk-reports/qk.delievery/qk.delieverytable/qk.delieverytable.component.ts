import { Component, Input, OnInit } from '@angular/core';
import { viewOrder } from 'src/app/Models/qk.conversion.model';

@Component({
  selector: 'qk-delieverytable',
  templateUrl: './qk.delieverytable.component.html',
  styleUrls: ['./qk.delieverytable.component.css']
})
export class QkDelieverytableComponent implements OnInit {

  
  first = 0;

  rows = 3;
  orderCols: object[]
  _selectedColumns: any[];
  @Input() gridValues: viewOrder[];
  constructor() {
    this.orderCols = [      
      { field: 'Brand', header: 'Brand' },
      { field: 'Dur', header: 'Duration' },
      { field: 'SDHD', header: 'SD/HD' },
      { field: 'SD', header: 'SD' },
      { field: 'HD', header: 'HD' },
      { field: 'DateOfDelivery', header: 'Delievery Date' },
      { field: 'ShortCaption', header: 'Short Caption' },
      { field: 'OutPutURL', header: 'Output Url' },
      { field: 'SpecCode', header: 'Spec Code' },
      { field: 'Caption', header: 'Caption' },
      { field: 'SpecNumber', header: 'Spec Number' },
      { field: 'Creative', header: 'Creative' },
      { field: 'MediaAgency', header: 'Media Agency' },
      { field: 'Production', header: 'Production' },
      { field: 'QuikIDOutput', header: 'QuikID Output' }
    ];

    this._selectedColumns = this.orderCols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.orderCols.filter(col => val.includes(col));
  }

  ngOnInit(): void {
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.gridValues ? this.first === (this.gridValues.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.gridValues ? this.first === 0 : true;
  }


}
