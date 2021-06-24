import { Component, OnInit } from '@angular/core';
import {PetClinicModel} from '../pet-clinic.model';
import {PetClinicService} from '../pet-clinic.service';

@Component({
  selector: 'app-pet-clinic',
  templateUrl: './pet-clinic.component.html',
  styleUrls: ['./pet-clinic.component.css']
})
export class PetClinicComponent implements OnInit {

  product = {
    name: '',
    id: null,
    description:''
  }
  edit = true;
  add = false;
  products: PetClinicModel[];

  constructor(private productService: PetClinicService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addProduct() {
    const data = {
      name: this.product.name,
      id: this.product.id,
      description: this.product.description
    };
    this.productService.createProduct(data).subscribe(response => {
      console.log(response)
      this.getProducts();
    });
  }

  setProductEdit(product: PetClinicModel) {
    this.product.name = product.name;
    this.product.id = product.id;
    this.product.description = product.description;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.product.name = "";
    this.product.id = null;
    this.product.description="";
    this.edit = true;
    this.add = false;
  }

  removeProduct(product: PetClinicModel) {
    const id = product.id;
    console.log(product);
    this.productService.deleteProduct(id).subscribe(product => console.log(product));
    this.getProducts();
  }

  updateProduct(){
    this.productService.editProduct(this.product).subscribe(response => console.log(response));
    this.getProducts();
    this.resetValues();
  }
}
