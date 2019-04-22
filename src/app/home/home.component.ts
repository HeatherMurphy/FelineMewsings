import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: object;
  query: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getVideos().subscribe(data => {
      this.videos = data
      console.log(this.videos)
    })

  }
  submit() {
    return this.query;
  }

}
