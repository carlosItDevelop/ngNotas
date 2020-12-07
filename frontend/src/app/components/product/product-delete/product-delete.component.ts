import { CoreService } from './../../../shared/services/core.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.coreService.showMessage('Produto excluído com sucesso!', true)
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
