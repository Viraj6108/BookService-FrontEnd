import { Component } from '@angular/core';
import { Book } from 'src/app/Model/Book';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
constructor(private adminservice : AdminService)
{

}
categoryName :string ='';
addBook(bookData : Book)
{
  
  this.adminservice.addBook(bookData,this.categoryName) .subscribe((res)=>
  {
    console.log(res,this.categoryName);
    alert("Book Added successfully")
  })
}
}
