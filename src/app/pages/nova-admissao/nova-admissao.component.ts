import { ModeloCooperado } from './../../interfaces/cooperado';
import { CooperadoService } from './../../services/cooperado.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.scss']
})
export class NovaAdmissaoComponent implements OnInit {
  error: boolean = false;
  form = new FormGroup({
    cpf: new FormControl('', Validators.required)
  });
  loading: boolean = false;
  dadosCooperado: ModeloCooperado | any;

  constructor(private cooperadoService: CooperadoService) { }

  ngOnInit() {
  }

  submit() {
    this.dadosCooperado = null;

    if (!this.form.valid) {
      this.error = true;
      return;
    }

    this.error = false;
    this.loading = true;

    this.cooperadoService.getData().subscribe(res => {
      this.loading = false;
      this.dadosCooperado = res;
    })

  }


}
