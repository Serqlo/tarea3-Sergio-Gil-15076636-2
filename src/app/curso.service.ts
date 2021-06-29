import { Injectable } from '@angular/core';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursos:Curso[]= new Array<Curso>();
  constructor() { }
  
  getAll(){
    return this.cursos;
  }
  get(id:number){
    return this.cursos [id];
  }

  getId(curso:Curso){
    return this.cursos.indexOf(curso);
  }

  adicionar(curso:Curso){
    let newLength = this.cursos.push(curso);
    let index = newLength - 1;
    return index;
  }

  Promedio(curso:Curso){
    let promedio:number=0;
    if(curso.Nota1 && curso.Porcentaje1 && curso.Nota2 && curso.Porcentaje2 && curso.Nota3 && curso.Porcentaje3 && curso.Nota4 && curso.Porcentaje4 && curso.Nota5 && curso.Porcentaje5){
      promedio= curso.Nota1*curso.Porcentaje1+curso.Nota2*curso.Porcentaje2+curso.Nota3*curso.Porcentaje3+curso.Nota4*curso.Porcentaje4+curso.Nota5*curso.Porcentaje5;
    }
    return promedio;
  }

}