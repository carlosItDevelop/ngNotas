import { CoreService } from './../../../shared/services/core.service';

import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: null,
    descricao: "",
    referencia: "",
    preco: null
  };


  constructor(private productService: ProductService,
              private router: Router,
              private coreService: CoreService) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.coreService.showMessage("Produto criado com sucesso!")
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
