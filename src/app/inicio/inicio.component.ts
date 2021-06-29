import { Component, OnInit } from '@angular/core';
import { CursoService} from '../curso.service';
import { Curso} from '../curso';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  materias:Curso[] = new Array<Curso>();
  

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.materias=this.cursoService.getAll();
  }
  
}
