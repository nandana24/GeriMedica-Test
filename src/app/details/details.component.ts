import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DetailsService} from '../details/details.service';
import { Details } from './details-model';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsJson: Details[]=[];
  myFormGroup: FormGroup = new FormGroup('');
  formTemplate: any = []; 
  constructor(public detailsService: DetailsService
 ) { }

  ngOnInit(): void {
    this.detailsService.getDetais().subscribe((d:Details[]) => {
      console.log("get the value of d", d);
      this.detailsJson = [...d];
      let group: any = {};
      this.detailsJson.forEach((i: Details) => {
        group[i.label] = new FormControl('',
          i.mandatory ? Validators.required : null);
      })

      this.myFormGroup = new FormGroup(group)
    })
  ;
  }

  onSubmit() {
    if (!this.myFormGroup.valid) {
      return;
    }
    console.log(this.myFormGroup.value);
  
  }

}
