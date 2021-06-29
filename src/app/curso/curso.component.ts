import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  @Input() materia:String | undefined;
  @Input() nota1:number | undefined;
  @Input() porcentaje1:number | undefined;
  @Input() nota2:number | undefined;
  @Input() porcentaje2:number | undefined;
  @Input() nota3:number | undefined;
  @Input() porcentaje3:number | undefined;
  @Input() nota4:number | undefined;
  @Input() porcentaje4:number | undefined;
  @Input() nota5:number | undefined;
  @Input() porcentaje5:number | undefined;

  promedio:number=0;
  curso:Curso=new Curso();
  PromedioBlancoDisplay = true;
  PromedioRojoDisplay = false;
  PromedioAmarilloDisplay = false;

  
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.curso.Materia=this.materia;
    this.curso.Nota1=this.nota1;
    this.curso.Porcentaje1=this.porcentaje1;
    this.curso.Nota2=this.nota2;
    this.curso.Porcentaje2=this.porcentaje2;
    this.curso.Nota3=this.nota3;
    this.curso.Porcentaje3=this.porcentaje3;
    this.curso.Nota4=this.nota4;
    this.curso.Porcentaje4=this.porcentaje4;
    this.curso.Nota5=this.nota5;
    this.curso.Porcentaje5=this.porcentaje5;
    this.promedio=this.cursoService.Promedio(this.curso);
    console.log(this.promedio)
    switch (true) {
      case this.promedio <= 4.5:
        this.PromedioRojoDisplay=true;
        this.PromedioBlancoDisplay=false;
        break;
      case this.promedio > 4.5 && this.promedio <= 6:
        this.PromedioAmarilloDisplay=true;
        this.PromedioBlancoDisplay=false;
        break;
      default:
        break;
    }
  }
}
