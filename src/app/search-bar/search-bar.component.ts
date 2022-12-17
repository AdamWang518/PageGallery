import { searchInfo } from './../searchInfo';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from '../task.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: TaskService) {
  }
  centuryFill(): void {
  }
  ngOnInit(): void {
  }
  search():void{
    this.pack.artist=this.artist;
    this.pack.name=this.name;
    this.pack.attribute=this.attribute;
    this.pack.century=this.century.replace("世紀","");
    this.pack.page=1;
    this.service.subject.next(this.pack);
  }
  pack:searchInfo=new searchInfo();
  artist: String = "";
  name: String = "";
  attribute: String = "";
  century:String="";
  centuries: String[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "13", "14", "15", "16", "17", "18", "19", "20", "21"];

}
