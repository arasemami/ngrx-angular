import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from '../shear/layout/reducers/layout.reducer';
import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';



export interface State {
    [fromLayout.layoutFeatureKey]: fromLayout.State;
    router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
>('Root reducers token', {
    factory: () => ({
        [fromLayout.layoutFeatureKey]: fromLayout.reducer,
        router: fromRouter.routerReducer,
    }),
});


/**
 * Layout Reducers
 */
export const selectLayoutState = createFeatureSelector<State, fromLayout.State>(
    fromLayout.layoutFeatureKey
);

export const selectSearchStateValue = createSelector(
    selectLayoutState,
    fromLayout.selectSearchValue
);
