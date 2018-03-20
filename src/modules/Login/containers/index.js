import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/';
import { login } from 'Redux/login/actions/';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abhi',
      pass: '123'
    };
  }
  onSubmit() {
    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div>
        <LoginForm
          state={this.state}
          onNameChange={(e) => this.setState({ name: e.target.value })}
          onPassChange={(e) => this.setState({ pass: e.target.value })}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    name: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (credentials) => dispatch(login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
