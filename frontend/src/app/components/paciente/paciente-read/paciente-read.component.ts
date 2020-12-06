import { PacienteService } from './../../services/paciente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from './../../../models/paciente.model';

import { MatSnackBar } from '@angular/material/snack-bar';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements OnInit {

  pacientes: Paciente[];
  dataSource: MatTableDataSource<Paciente>;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'estado', 'action'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private pacienteService: PacienteService, 
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.pacienteService.read().subscribe(pacientes => {
      this.pacientes = pacientes;
      this.dataSource = new MatTableDataSource<Paciente>(pacientes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
