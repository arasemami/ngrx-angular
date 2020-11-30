import * as fromLayout from '../../reducers';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {
  searchValue$: Observable<any>;
  customers = [
    { name: 'aras', phone: '09111160804' },
    { name: 'dan', phone: '09111160804' },
    { name: 'sara', phone: '09111160804' },
    { name: 'igor', phone: '09111160804' }
  ]

  constructor(private store: Store<fromLayout.State>) {
    this.searchValue$ = store.pipe(select(fromLayout.selectSearchStateValue));
  }

  ngOnInit(): void {
  }

}
