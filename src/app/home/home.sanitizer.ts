import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser';

export class Sanitizer {
  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;
  trustedUrl: SafeUrl;
  dangerousUrl: string;
  
  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

  }
    updateVideoUrl(id: string) {
      // Appending an ID to a YouTube URL is safe.
      // Always make sure to construct SafeValue objects as
      // close as possible to the input data so
      // that it's easier to check if the value is safe.
      this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
      this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }


}

  //source:https://angular.io/guide/security
