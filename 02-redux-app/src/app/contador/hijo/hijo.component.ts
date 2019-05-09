import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import * as ContadorActions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const action = new ContadorActions.MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new ContadorActions.DividirAction(5);
    this.store.dispatch(action);
  }

}
