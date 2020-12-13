import { CoreService } from './core.service';
import { EstPaciente } from '../../models/estPaciente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadoPacienteService {

  baseUrl = "http://localhost:3001/estpaciente";

  constructor(
    private http: HttpClient, private coreService: CoreService
  ) { }


  read(): Observable<EstPaciente[]> {
    return this.http.get<EstPaciente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }


  erroHandler(e: any): Observable<any> {
    this.coreService.showMessage('Ocorreu um erro inesperado!', true)
    return EMPTY
  }

}
