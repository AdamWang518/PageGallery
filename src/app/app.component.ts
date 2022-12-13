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
  constructor(private service: TaskService) {
    this.paintGetter();
  }

  paintGetter(): void {
    let that = this;
    this.service.subject.asObservable().subscribe(res => {
      console.log(res);
      this.service.selectGallery(res).subscribe(data => {
        this.draws = [];
        data.data.forEach(function (value: any) {
          that.draws.push(value);
        });
        console.log(this.draws);
      })
      // 成功
    })
  }
}
