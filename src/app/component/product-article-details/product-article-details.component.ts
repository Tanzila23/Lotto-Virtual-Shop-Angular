import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Shared/user.service';
import { MatDialog,MatDialogConfig } from '@angular/material';
import { ProductVarientComponent } from '../product-varient/product-varient.component';

@Component({
  selector: 'app-product-article-details',
  templateUrl: './product-article-details.component.html',
  styleUrls: ['./product-article-details.component.css']
})
export class ProductArticleDetailsComponent implements OnInit {
  articleForm:FormGroup;
  constructor(
    private service:UserService,
    private toastr:ToastrService,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
    this.articleForm = new FormGroup({
      ArticleTitle:new FormControl('',Validators.required),
      ArticleSubTitle:new FormControl('',Validators.required),
      CategoryC_Id:new FormControl(null,Validators.required),
      SubCategoryS_Id:new FormControl(null,Validators.required),
      Brand_Id:new FormControl(null,Validators.required),
      Vat_Id:new FormControl(null,Validators.required),
      Description:new FormControl('',Validators.required),
      StandardPrice:new FormControl(null,Validators.required),
      FranchisePrice:new FormControl(null,Validators.required),
      InstitutePrice:new FormControl(null,Validators.required),
      PurchaseCost:new FormControl(null,Validators.required),
      WholeSalePrice:new FormControl(null,Validators.required),
      DealerPrice:new FormControl(null,Validators.required),
      OtherPrice:new FormControl(null,Validators.required),
      DiscontPrice:new FormControl(null,Validators.required),
      DiscountRate:new FormControl(null,Validators.required)
    })
    this.service.ArticleVariantList = [];
    this.service.ArticleImageList = [];
  }
  config: AngularEditorConfig = { editable: true, spellcheck: true, height: '3rem', minHeight: '3rem', placeholder: 'Enter Article Description  here...', translate: 'no' }
  AddOrEditAriticleVariant(){
   
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
     
    this.dialog.open(ProductVarientComponent,dialogConfig);
  }
}
