/*
 * khareed.pk
 * uzair usama
 
 */
// action
import * as actions from '../actions/layout.action';
import { LayoutState, layoutStateRecord } from './layout.state';
export const initialState: LayoutState = new layoutStateRecord() as LayoutState;

export function reducer(
  state = initialState,
  { type, payload }: any
): LayoutState {
  if (!type) {
    return state;
  }

  switch (type) {
    case actions.ActionTypes.GET_SETTINGS_SUCCESS_ACTION: {
      return Object.assign({}, state, {
      });
    }
    default: {
      return state;
    }
  }
}
