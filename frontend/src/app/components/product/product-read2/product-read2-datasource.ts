
import { Product } from './../../../models/product.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';





// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product[] = [
  {id: 1, descricao: 'Hydrogen', referencia : "A-001-C", preco: 123.45 },
  {id: 2, descricao: 'Helium', referencia : "A-001-C", preco: 123.45 },
  {id: 3, descricao: 'Lithium', referencia : "A-001-C", preco: 123.45 },
  {id: 4, descricao: 'Beryllium', referencia : "A-001-C", preco: 123.45 },
  {id: 5, descricao: 'Boron', referencia : "A-001-C", preco: 123.45 },
  {id: 6, descricao: 'Carbon', referencia : "A-001-C", preco: 123.45 },
  {id: 7, descricao: 'Nitrogen', referencia : "A-001-C", preco: 123.45 },
  {id: 8, descricao: 'Oxygen', referencia : "A-001-C", preco: 123.45 },
  {id: 9, descricao: 'Fluorine', referencia : "A-001-C", preco: 123.45 },
  {id: 10, descricao: 'Neon', referencia : "A-001-C", preco: 123.45 },
  {id: 11, descricao: 'Sodium', referencia : "A-001-C", preco: 123.45 },
  {id: 12, descricao: 'Magnesium', referencia : "A-001-C", preco: 123.45 },
  {id: 13, descricao: 'Aluminum', referencia : "A-001-C", preco: 123.45 },
  {id: 14, descricao: 'Silicon', referencia : "A-001-C", preco: 123.45 },
  {id: 15, descricao: 'Phosphorus', referencia : "A-001-C", preco: 123.45 },
  {id: 16, descricao: 'Sulfur', referencia : "A-001-C", preco: 123.45 },
  {id: 17, descricao: 'Chlorine', referencia : "A-001-C", preco: 123.45 },
  {id: 18, descricao: 'Argon', referencia : "A-001-C", preco: 123.45 },
  {id: 19, descricao: 'Potassium', referencia : "A-001-C", preco: 123.45 },
  {id: 20, descricao: 'Calcium', referencia : "A-001-C", preco: 123.45 }
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductRead2DataSource extends DataSource<Product> {

 
  data: Product[] = EXAMPLE_DATA;
  
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'descricao': return compare(a.descricao, b.descricao, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
