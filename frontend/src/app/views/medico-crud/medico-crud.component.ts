import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medico-crud',
  templateUrl: './medico-crud.component.html',
  styleUrls: ['./medico-crud.component.css']
})
export class MedicoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Médicos',
      icon: 'storefront',
      routeUrl: '/medicos'
    }
  }

  ngOnInit(): void {
  }

  navigateToMedicoCreate(): void {
    this.router.navigate(["/medicos/create"])
  }

}
