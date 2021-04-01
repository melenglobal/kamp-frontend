import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators, Form} from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  productAddForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  
  createProductAddForm(){
  this.productAddForm =this.formbuilder.group({
    productName:["",Validators.required],
    unitPrice:["",Validators.required],
    unitsInStock:["",Validators.required],
    categoryId:["",Validators.required]
  });
  }
}
