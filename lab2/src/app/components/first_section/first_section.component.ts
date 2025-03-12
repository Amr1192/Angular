import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-section',
  imports: [FormsModule],
  templateUrl: './first_section.component.html',
  styleUrl: './first_section.component.css'
})
export class FirstSectionComponent {
  studentName:string = ''
   target:any = ""
  Congratulations(e:Event) {
    this.target = e.target as HTMLInputElement
    this.studentName = this.target.value
    
  }

  alert(){
    if (this.studentName.length!=0)
        alert(`Congratulations: ${this.studentName} on your birthday`)
    this.target.value=''
  }


}
