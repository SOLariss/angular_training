import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  options = {
    min:0, 
    max:10, 
    suffix: "Suffix", 
    prefix: "Preffix", 
    step: 1,
    label: "Great Counter",
    require: "yes"
  };

  changedLn(e) {
    console.log('value changed ', e);
  }
}
