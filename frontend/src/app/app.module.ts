import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './views/home/home.component';

import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

import { MedicoReadComponent } from './components/medico/medico-read/medico-read.component';
import { MedicoCrudComponent } from './components/medico/medico-crud/medico-crud.component';
import { MedicoCreateComponent } from './components/medico/medico-create/medico-create.component';
import { MedicoDeleteComponent } from './components/medico/medico-delete/medico-delete.component';
import { MedicoUpdateComponent } from './components/medico/medico-update/medico-update.component';

import { PacienteCrudComponent } from './components/paciente/paciente-crud/paciente-crud.component';
import { PacienteReadComponent } from './components/paciente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/paciente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './components/paciente/paciente-delete/paciente-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    DashboardComponent,
    MedicoReadComponent,
    MedicoCrudComponent,
    MedicoCreateComponent,
    MedicoDeleteComponent,
    MedicoUpdateComponent,
    PacienteCrudComponent,
    PacienteReadComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent,
    PacienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
