import { searchInfo } from './searchInfo';
import { draw } from './draw';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  draws: draw[] = [];
  title: any;
  Info:searchInfo=new searchInfo();
  counts:Number=0;
  constructor(private service: TaskService) {
    this.paintGetter();
  }
  pageGetter(pageIndex: number):void{
    let that = this;
    this.Info.page=pageIndex;
    console.log(this.Info);
    this.service.selectGallery(this.Info).subscribe(data => {
      this.draws = [];
      data.data.forEach(function (value: any) {
        that.draws.push(value);
      });
      console.log(this.draws);
    })
  }
  getChosen(pageIndex: number) {
    this.pageGetter(pageIndex);
  }
  paintGetter(): void {
    let that = this;
    this.service.subject.asObservable().subscribe(res => {
      console.log(res);
      this.Info=res;
      this.service.selectGallery(res).subscribe(data => {
        this.draws = [];
        this.counts=data.count;

        data.data.forEach(function (value: any) {
          that.draws.push(value);
        });
        console.log(this.draws);
      })
      // 成功
    })
  }
}
