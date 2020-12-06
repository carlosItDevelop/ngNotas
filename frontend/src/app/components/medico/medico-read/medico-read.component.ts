import { MedicoService } from './../../services/medico.service';
import { Medico } from './../../../models/medico.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-medico-read',
  templateUrl: './medico-read.component.html',
  styleUrls: ['./medico-read.component.css']
})
export class MedicoReadComponent implements OnInit {

  medicos: Medico[];
  dataSource: MatTableDataSource<Medico>;
  displayedColumns: string[] = ['id', 'nome', 'especialidade', 'crm', 'action'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private medicoService: MedicoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.medicoService.read().subscribe(medicos => {
      this.medicos = medicos;
      this.dataSource = new MatTableDataSource<Medico>(medicos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  }

}
