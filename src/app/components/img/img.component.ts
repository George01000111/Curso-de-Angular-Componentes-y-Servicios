import { Component, OnInit,Input,Output,EventEmitter,OnChanges, AfterViewInit,OnDestroy,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {

  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string){
     this.img = newImg;
     console.log('change just img =>',  this.img)
  }



  @Input() alt: string = '';
  

  @Output() loaded = new EventEmitter<string>();
   imageDefault = './assets/images/descarga.png';
  // counter =0;
  // counterFn:number | undefined;

  constructor() { 
    //before render
    //solo se crea una vez
    console.log('constructor','imgvalues =>',this.img);
  }

  ngOnChanges(changes: SimpleChanges){
     //before durante render
     //changes inputs --times 
     console.log('ngOnChanges','imgvalues =>',this.img);
     console.log('changes' ,changes);
  }

  ngOnInit(): void {
      //before render
      //async - fetch --
      //corre una vez
      console.log('ngOnInit','imgvalues =>',this.img);
      // this.counterFn = window.setInterval(()=>{
      //  this.counter +=1;
      //  console.log('run counter');
      // },1000);
  }

  ngAfterViewInit(){
    //despues del render
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
      //delete render
      console.log('ngOnDestroyyyyyyyyyyyyy');
  //     window.clearInterval(this.counterFn);
   }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo') 
    this.loaded.emit(this.img);
  }

  

}
