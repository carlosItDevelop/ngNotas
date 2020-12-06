import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { MedicoCrudComponent } from './views/medico-crud/medico-crud.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "medicos",
    component: MedicoCrudComponent
  },
  {
    path: "medicos/create",
    component: MedicoCreateComponent
  },
  {
    path: "medicos/update/:id",
    component: MedicoUpdateComponent
  },
  {
    path: "medicos/delete/:id",
    component: MedicoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
