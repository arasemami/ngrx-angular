import { createAction, props } from '@ngrx/store';

export const typeInTheSearch = createAction(
    '[Layout] Search for products',
    props<{ searchValue: string }>()
);
