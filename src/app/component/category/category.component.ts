import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

categories: any[] = [
  {id:1, name:"Mark", gender:"male", email:"m@gmail.com"},
  {id:2, name:"Jhon", gender:"male",email:"m@gmail.com"},
  {id:3, name:"Watson", gender:"male",email:"m@gmail.com"},
  {id:4, name:"Akash", gender:"male",email:"m@gmail.com"}
]


  constructor() { }

  ngOnInit(): void {
  }

}
