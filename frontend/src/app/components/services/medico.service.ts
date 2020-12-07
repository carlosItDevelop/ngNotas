import { CoreService } from './../../shared/services/core.service';
import { Medico } from '../../models/medico.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseUrl = "http://localhost:3001/medicos";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private coreService: CoreService
  ) { }


  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  
  read(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  readById(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Medico>(url).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  update(medico: Medico): Observable<Medico> {
    const url = `${this.baseUrl}/${medico.id}`
    return this.http.put<Medico>(url, medico).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  delete(id: number): Observable<Medico> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Medico>(url).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.coreService.showMessage('Ocorreu um erro inesperado!', true)
    return EMPTY
  }



}
