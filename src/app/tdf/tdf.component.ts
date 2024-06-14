import { Component } from '@angular/core';
import { Student } from '../student';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  std = new Student('',0,'');

  save(formData:any){
    //console.log(formData.value);
    //console.log(formData);
    // const std = new Student(formData.name, formData.age, formData.email);
    // console.log(std);
    console.log(this.std);
  }

}
