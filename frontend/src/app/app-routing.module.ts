import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { MedicoCrudComponent } from './components/medico/medico-crud/medico-crud.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';

import { PacienteCrudComponent } from './components/paciente/paciente-crud/paciente-crud.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/paciente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './components/paciente/paciente-delete/paciente-delete.component';


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
  },
  {
    path: "pacientes",
    component: PacienteCrudComponent
  },
  {
    path: "pacientes/create",
    component: PacienteCreateComponent
  },
  {
    path: "pacientes/update/:id",
    component: PacienteUpdateComponent
  },
  {
    path: "pacientes/delete/:id",
    component: PacienteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
