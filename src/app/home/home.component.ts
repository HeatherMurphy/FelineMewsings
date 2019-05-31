import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { video } from 'src/Models/video.model';
import { id } from 'src/Models/id.model';
import { items } from 'src/Models/items.model';
import { snippet } from 'src/Models/snippet.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stuff: video;
  query: string;
  //s: DomSanitizer;
  //videoUrl: SafeResourceUrl;
  messageForm: FormGroup;


  constructor(private data: DataService, private sanitizer: DomSanitizer, private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      query: [""]
    })
  }

  ngOnInit() {
    this.data.getVideos().subscribe(data => {
      this.stuff = data;
      console.log(this.stuff);
      //this.videoUrl = this.UrlSanitizer("https://www.youtube.com/embed/hq3yfQnllfQ");
    })
  }
  onSubmit() {
    this.query = this.messageForm.controls.query.value;
    this.data.query = this.query;
    this.data.getVideos().subscribe(data => {
      this.stuff = data;
      console.log(data);
      
    })

  }
  UrlSanitizer(id: string) {
    console.log(this.sanitizer);
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + id);
  }

  
}
