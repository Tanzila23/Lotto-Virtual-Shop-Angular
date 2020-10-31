import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { UserService } from 'src/app/Shared/user.service';
@Component({
  selector: 'app-product-varient',
  templateUrl: './product-varient.component.html',
  styleUrls: ['./product-varient.component.css']
})
export class ProductVarientComponent implements OnInit {
  articleVariantForm:FormGroup;
  constructor(private service:UserService) { }

  ngOnInit() {
    this.articleVariantForm = new FormGroup({
      ArticleNo:new FormControl('',Validators.required),
      Size:new FormControl(null,Validators.required),
      Color:new FormControl('',Validators.required),
      Gender:new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    if(this.articleVariantForm.valid){
      this.service.ArticleVariantList.push(this.articleVariantForm.value);
      this.articleVariantForm.reset();
    }
  }
}
