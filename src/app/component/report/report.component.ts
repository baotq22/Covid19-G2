import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  rfContact!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.rfContact = this.fb.group({
      Name: this.fb.control('',Validators.required),
      CMND: this.fb.control('',Validators.required),
      dateOfBirth: this.fb.control('',Validators.required),
      Gender: this.fb.control('',Validators.required),
      Address: this.fb.control('',Validators.required),
      Phone: this.fb.control('',Validators.required),
      Email: this.fb.control('',[Validators.required,Validators.email]),
      Report: this.fb.control('',Validators.required)

    })
  }
  onSubmit(){
    console.log(this.rfContact);
  }

}
