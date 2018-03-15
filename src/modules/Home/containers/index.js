import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from '../components/';
import { changeName } from 'Redux/actions';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abhi',
      pass: '123'
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <HomeView />
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.Object
};

export function mapStateToProps(state) {
  return {
    name: state.home.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
