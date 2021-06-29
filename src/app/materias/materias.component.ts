import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CursoService} from '../curso.service';
import { Curso} from '../curso';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent implements OnInit {

  public curso: Curso=new Curso();

  constructor(private cursoService: CursoService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(form.value.Materia && form.value.Nota1 && form.value.Porcentaje1 && form.value.Nota2 && form.value.Porcentaje2 && form.value.Nota3 && form.value.Porcentaje3 && form.value.Nota4 && form.value.Porcentaje4 && form.value.Nota5 && form.value.Porcentaje5){
        this.cursoService.adicionar(form.value);
        console.log(form.value);
    }
  }
}
