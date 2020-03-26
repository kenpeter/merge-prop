import React from "react";
import PropTypes from "prop-types";

function App(props) {
  //test
  console.log("props", props);

  return <div className="App"></div>;
}

App.defaultProps = {
  systemConfig: {},
  applicationConfig: {},
  dummyConfig: {
    prop_1: {
      prop_1_1: "prop_1_1",
      prop_1_2: "prop_1_2"
    },
    prop_2: {
      prop_2_1: "prop_2_1",
      prop_2_2: "prop_2_2"
    }
  }
};

App.propTypes = {
  systemConfig: PropTypes.object.isRequired,
  applicationConfig: PropTypes.object.isRequired
};

export default App;
