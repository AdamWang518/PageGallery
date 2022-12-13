import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  totalPage: number = 0;
  totalCount: number = 0;
  page: any[] = [];
  pageIndex: number = 1;
  @Input() pageInfo: any;
  @Output() choosePage = new EventEmitter();
  constructor() {
    this.pageSlicer(this.pageIndex);
  }
  ngOnChanges(changes: SimpleChanges) {
    this.totalCount = changes['pageInfo'].currentValue;
    this.pageSlicer(1);
  }
  ngOnInit(): void {
    console.log(this.pageInfo);
    for (let i = 1; i < this.pageInfo; i++) {
      this.page.push(i);
    }
  }
  pageSlicer(pageNum: number) {
    //先算出總頁數
    this.totalPage = Math.ceil(this.totalCount / 20);
    let bound = 0;
    if (pageNum % 10 == 0) {
      bound = Math.floor((pageNum - 1) / 10)
    } else {
      bound = Math.floor((pageNum) / 10)
    }
    let upper = (bound + 1) * 10;//
    let lower = (bound * 10) + 1;
    if (upper > this.totalPage) {
      upper = this.totalPage;
    }
    this.page = [];
    for (let start = lower; start <= upper; start++) {
      this.page.push(start);
    }
  }
  pageChoose(number: number) {
    this.pageIndex = number;
    this.choosePage.emit(this.pageIndex);
  }//不動
  nextPage() {
    if (this.pageIndex < this.totalPage) {
      this.pageIndex++;
      this.pageSlicer(this.pageIndex);
      this.choosePage.emit(this.pageIndex);
    }
  }
  previousPage() {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.pageSlicer(this.pageIndex);
      this.choosePage.emit(this.pageIndex);
    }
  }
}
