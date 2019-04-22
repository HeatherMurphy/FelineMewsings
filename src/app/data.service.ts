import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getVideos() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=cat&type=video&videoCaption=closedCaption&key=AIzaSyBVga6PllXXvlNDdiCo8V4gWcKjPvQ7s-o')
  }
}
