import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19-G2';
  constructor(private router:Router){}
  sendToReport(){
    this.router.navigate(['report'])
  }
}
