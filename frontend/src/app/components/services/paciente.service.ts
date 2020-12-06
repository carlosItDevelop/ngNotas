
import { Paciente } from '../../models/paciente.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl = "http://localhost:3001/pacientes";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }


  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, paciente).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  
  read(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  readById(id: number): Observable<Paciente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Paciente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  update(paciente: Paciente): Observable<Paciente> {
    const url = `${this.baseUrl}/${paciente.id}`
    return this.http.put<Paciente>(url, paciente).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }
  
  delete(id: number): Observable<Paciente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Paciente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado!', true)
    return EMPTY
  }



}
