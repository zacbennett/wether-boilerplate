import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the weatherPage state domain
 */

const selectWeatherPageDomain = state => state.get("weatherPage", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherPage
 */

const makeSelectWeatherPage = () =>
  createSelector(selectWeatherPageDomain, substate => substate.toJS());

export default makeSelectWeatherPage;
export { selectWeatherPageDomain };
