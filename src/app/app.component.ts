import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'zero-knowledge';
  isSmallDevice: boolean;
  mediaSub: Subscription;
  constructor(
    private mediaObserver: MediaObserver,
  ){

  }

  ngOnInit(): void {
    this.updateDevices();
  }

  updateDevices(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.isSmallDevice = result.mqAlias === 'xs' ? true : false;

      if (result.mqAlias === 'xl' || result.mqAlias=== 'lg'){
        this.isSmallDevice = false;
      }else{
        this.isSmallDevice = true;
      }
    });
  }
}
