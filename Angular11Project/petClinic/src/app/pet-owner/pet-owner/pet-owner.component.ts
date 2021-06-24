import { Component, OnInit } from '@angular/core';
import {PetOwnerModel} from '../pet-owner.model';
import {PetOwnerService} from '../pet-owner.service';

@Component({
  selector: 'app-pet-owner',
  templateUrl: './pet-owner.component.html',
  styleUrls: ['./pet-owner.component.css']
})
export class PetOwnerComponent implements OnInit {

  product = {
    name: '',
    id: null,
    description:''
  }
  edit = true;
  add = false;
  products: PetOwnerModel[];

  constructor(private productService: PetOwnerService) {}

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

  setProductEdit(product: PetOwnerModel) {
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

  removeProduct(product: PetOwnerModel) {
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
