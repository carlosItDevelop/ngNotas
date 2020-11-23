
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  /*
  product: Product = {
    id: 10,
    descricao: "Bola Importada n. 2",
    referencia: "F-098ik",
    preco: 2310.90
  };
  */
  product: Product = {
    id: null,
    descricao: "",
    referencia: "",
    preco: null
  };


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showOnToastr("Produto criado com sucesso!")
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
