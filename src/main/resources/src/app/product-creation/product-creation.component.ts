import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss'],
  providers: [ProductService]
})
export class ProductCreationComponent implements OnInit {
  productForm: FormGroup

  sizes: Array<any> = [
    {name: 'One Size', value: '1'},
    {name: 'XS', value: '2'},
    {name: 'S', value: '3'},
    {name: 'M', value: '4'},
    {name: 'L', value: '5'},
    {name: 'XL', value: '6'}

  ];

  productCategories = []
  colors = []
  seasons = []
  imageUrl: string;

  constructor(private fb: FormBuilder, private _app: ProductService,) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  submit() {
    let product: Product;
    product = this.productForm.value;
    product.dryClean = this.productForm.get("dryClean").value
    this._app.postProduct(product)
  }

  private initializeForm() {

    this.productForm = this.fb.group({
      name: ['Testing', [Validators.required]],
      quickDesc: ['Testing', [Validators.required]],
      description: ['Testing', [Validators.required]],
      fittingInfo: ['Testing', [Validators.required]],
      washInfo: ['Testing', [Validators.required]],
      material: ['Testing', [Validators.required]],
      imgCover: this.fb.group({
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kUVuAjGZ8a6N1Tz9m0i0zKXVkk0CTJnJslJu6Z3Pk17XqOdSyQ&s',
        id: 0
      }),
      dryClean: false,
      productCategory: [1],
      color: [1],
      season: [1],
      retailPrice: [0, [Validators.required]],
      measurements: this.fb.group({
        chest: [0, [Validators.required]],
        hips: [0, [Validators.required]],
        waist: [0, [Validators.required]],
        length: [0, [Validators.required]]
      }),
      sizes: this.fb.array([]),
      images: this.fb.array([])
    })
    this.productCategories = this.getProductCategories()
    this.colors = this.getColors()
    this.seasons = this.getSeasons()
  }

  getProductCategories() {
    return [
      {name: 'Dresses', id: '1'},
      {name: 'Tops', id: '2'},
      {name: 'Pants', id: '3'},
      {name: 'Skirts', id: '4'},
      {name: 'Jumpsuits & Rompers', id: '5'},
      {name: 'Jackets & Coats', id: '6'},
      {name: 'Bags', id: '7'},
    ];
  }
  getSeasons() {
    return [
      {name: 'Winter', id: '1'},
      {name: 'Spring', id: '2'},
      {name: 'Fall', id: '3'},
      {name: 'Summer', id: '4'}
    ];
  }
  getColors() {
    return [
      {name: 'black', id: 1},
      {name: 'white', id: 2},
      {name: 'grey', id: 3},
      {name: 'cream', id: 4},
      {name: 'brown', id: 5},
      {name: 'red', id: 6},
      {name: 'orange', id: 7},
      {name: 'yellow', id: 8},
      {name: 'green', id: 9},
      {name: 'blue', id: 10},
      {name: 'purple', id: 11},
      {name: 'pink', id: 12},
      {name: 'gold', id: 13},
      {name: 'silver', id: 14},
      {name: 'print', id: 15},

    ];
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

  get images() {
    return this.productForm.get('images') as FormArray
  }

  addImage() {
    this.images.push(this.newImage());
  }

  removeImage(i: number) {
    this.images.removeAt(i)
  }
}
