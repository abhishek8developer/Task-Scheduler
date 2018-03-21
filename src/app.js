import React, { PropTypes } from 'react';
import Header from 'Components/header';

const App = (props) => (
  <div className='container-fluid'>
    <Header />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
