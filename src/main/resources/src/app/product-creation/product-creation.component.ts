import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {ProductService} from "../product.service";
import {ScriptService} from "../script.service";

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss'],
  providers: [ProductService]
})
export class ProductCreationComponent implements OnInit {
  productForm: FormGroup

  Sizes: Array<any> = [
    { name: 'S', value: '2' },
    { name: 'M', value: '3' },
    { name: 'L', value: '4' }
  ];
  imageUrl: string;

  constructor(private fb: FormBuilder, private _app: ProductService,) {
  }

  ngOnInit(): void {
    this.initilizeForm();
  }

  submit() {
    let product: Product;
    product = this.productForm.value;
    product.dryClean = this.productForm.get("dryClean").value
    console.log(product)
    this._app.postProduct(product)
  }

  private initilizeForm() {

    this.productForm = this.fb.group({
      name: 'Testing',
      quickDesc: 'ewrweferg',
      fittingInfo: 'asdffd',
      washInfo: 'asfdsdf',
      material: 'sfsf',
      imgCover: this.fb.group({
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kUVuAjGZ8a6N1Tz9m0i0zKXVkk0CTJnJslJu6Z3Pk17XqOdSyQ&s',
          id:0
        }),
      dryClean: false,
      sizes: this.fb.array([]),
      images: this.fb.array([])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.productForm.get('sizes') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  newImage(): FormGroup {
    return this.fb.group({
      url: 'https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png'
    })
  }
  get images(){
    return this.productForm.get('images') as FormArray
  }

  addImage() {
    this.images.push(this.newImage());
  }

  removeImage(i: number) {
      this.images.removeAt(i)
  }
}
