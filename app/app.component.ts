import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
a = 10;
b = 20;
c = this.a + this.b;

salary = 0;

childName = "Kamal Sharma";

fruits = ['Apple', 'Mango'];


addFruit(fruit: string){
this.fruits.push(fruit);

return this.fruits;
}

num1 = 0;

changeVal(event: any){
  this.num1 = event.target.value;
}

sum(){
  this.c = this.a * 1 + this.b * 1;
  return  this.c;
}

cities = ['Alwar', 'Jaipur', 'Delhi', 'Noida'];

employees = [ 
{ name: "Ankit", department: "IT", salary: 35000 },
{ name: "Manish", department: "Sales", salary: 43000 },
{ name: "Tarun", department: "IT", salary: 47000 },
{ name: "Arun", department: "HR", salary: 38000 },
{ name: "Bharat", department: "Accounts", salary: 53000 },
{ name: "Sumit", department: "Sales", salary: 42000 }
];
}
