import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="HelloWorld\logo.jpg";
  url="https:/www.google.com";
  userName:string="";
  nameError:string="";

  ngOnInit(): void{
    this.title="hello world 1"
  }

onClick($event: any){
  console.log("save button is clicked",$event)
  window.open(this.url,"_blank");
}

onInput($event:any){
  console.log("change event occured!",$event.data);
  const nameRegex=RegExp('[A-Z]{1}[a-z]{2}');
  if(nameRegex.test(this.userName)){
    this.nameError="";
    return;
  }
  this.nameError="name is incorrect";
}
}
