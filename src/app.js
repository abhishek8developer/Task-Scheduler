import { PropTypes } from 'react';

const App = (props) => (props.children);

App.propTypes = {
  children: PropTypes.any
};

export default App;
