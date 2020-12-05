import { Product } from './../../../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  dataSource: MatTableDataSource<Product>;
  displayedColumns: string[] = ['id', 'descricao', 'referencia', 'preco', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService, snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
