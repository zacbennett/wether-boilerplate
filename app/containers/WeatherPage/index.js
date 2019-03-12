/**
 *
 * WeatherPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectWeatherPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class WeatherPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>WeatherPage</title>
          <meta name="description" content="Description of WeatherPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

WeatherPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  weatherPage: makeSelectWeatherPage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "weatherPage", reducer });
const withSaga = injectSaga({ key: "weatherPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(WeatherPage);
