import React, { PropTypes } from 'react';

const App = (props) => (
  <div className='container-fluid'>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
