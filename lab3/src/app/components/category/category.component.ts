import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule, ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categrois: string[] = ["All", "Electronics", "Books"]

  imgs: {img : string, name:string , price:number, quantity:number,category: string}[] = [
    {img: "./imgs/electronics/25.jpg", name: "elec1",price: 200,quantity: 0,category:"Electronics"},
    {img:  "./imgs/books/31.jpg", name: "book1",  price: 300, quantity: 1,category:"Books"},
    {img: "./imgs/electronics/27.jpg",name: "elec2",price: 200,quantity: 3, category:"Electronics"},
    {img: "./imgs/books/32.jpg", name: "book2",price: 200,quantity: 2, category:"Books"},
    {img: "./imgs/electronics/28.jpg", name: "elec3",price: 200, quantity: 0,category: "Electronics"},
    {img:  "./imgs/books/33.jpg",name: "book3",price: 300, quantity: 1, category: "Books"},
  ]

// ------------------------------------------
select: string = "All"

  filterCategory(category : string){
     this.select = category;
  }


  get filterImgs () {
    return this.select === "All"? this.imgs : this.imgs.filter(item => item.category === this.select)
  }

}
