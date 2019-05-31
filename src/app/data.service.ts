import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  query: string = '';
  url: string;
  constructor(private http: HttpClient) { }
  getVideos() {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat' + this.query + '&type=video&videoCaption=closedCaption&key=AIzaSyBVga6PllXXvlNDdiCo8V4gWcKjPvQ7s-o'
    console.log(this.url);
    return this.http.get(this.url);
  }
}
