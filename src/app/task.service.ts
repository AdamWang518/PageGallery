import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { searchInfo } from './searchInfo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  subject = new Subject<searchInfo>();
  constructor(private http: HttpClient) { }
  selectGallery(Info:searchInfo){
    return this.http.get<any>(`http://localhost:13065/GalleryControler/getGallery?artist=${Info.artist}&name=${Info.name}&attribute=${Info.attribute}&year=${Info.century}&page=${Info.page}`);
    //http://localhost:44374/getGallery?artist=${Info.artist}&name=${Info.name}&attribute=${Info.attribute}&year=${Info.century}&page=${Info.page}
  }
}
