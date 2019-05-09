import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ContadorActions from './contador/contador.actions';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    const action = new ContadorActions.IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new ContadorActions.DecrementarAction();
    this.store.dispatch(action);
  }
}
