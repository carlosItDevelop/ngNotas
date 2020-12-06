import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-crud',
  templateUrl: './paciente-crud.component.html',
  styleUrls: ['./paciente-crud.component.css']
})
export class PacienteCrudComponent implements OnInit {


  constructor(private router: Router, 
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Pacientes',
      icon: 'local_hotel',
      routeUrl: '/pacientes'
    }
  }

  ngOnInit(): void {
  }

  navigateToPacienteCreate(): void {
    this.router.navigate(["/pacientes/create"])
  }

}
