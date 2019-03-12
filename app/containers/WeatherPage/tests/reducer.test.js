import { fromJS } from 'immutable';
import weatherPageReducer from '../reducer';

describe('weatherPageReducer', () => {
  it('returns the initial state', () => {
    expect(weatherPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
