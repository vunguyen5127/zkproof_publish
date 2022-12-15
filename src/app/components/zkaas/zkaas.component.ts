import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zkaas',
  templateUrl: './zkaas.component.html',
  styleUrls: ['./zkaas.component.css']
})
export class ZkaasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const index = 0;
    this.zeroKnowledService(index);
    // var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)
    // var isSafari = navigator.userAgent.indexOf("Safari") > -1;
    // var isChrome = navigator.userAgent.indexOf("Chrome") > -1;
    // console.log(isMobile);
    // console.log(isSafari);
    // console.log(isChrome);
  }

  selectedTab(event): void{
    console.log('event: ', event);
    this.zeroKnowledService(event.index);
  }

  zeroKnowledService(index): void{
    if (index==0){
      const iframeClient = document.getElementById('client_wasm');
      iframeClient.setAttribute('src', `./../../assets/wasm/prover.html`);
    }else{
      const iframeClient = document.getElementById('client_wasm');
      iframeClient.setAttribute('src', `./../../assets/wasm/verifier.html`);
    }
  }

}
