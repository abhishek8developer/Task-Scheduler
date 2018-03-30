import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/';
import { login } from 'Redux/login/actions/';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abhi',
      pass: '123'
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);;
  }
  onSubmit() {
    this.props.onSubmit(this.state);
  }
  facebookLogin() {
    // appId: '214316022652701'
  }
  responseGoogle(response) {
    console.log(response);
  }
  render() {
    console.log(this.props.name);
    const { data } = this.props.name;
    return (
      <div>
        <LoginForm
          state={this.state}
          onNameChange={(e) => this.setState({ name: e.target.value })}
          onPassChange={(e) => this.setState({ pass: e.target.value })}
          onSubmit={() => this.onSubmit}
        />
        <GoogleLogin
          clientId='227375302353-gbh8gt56s6chqhvdp6j1sotoc78eh0jg.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <FacebookLogin
          appId='214316022652701'
          autoLoad
          fields='name,email,picture'
          callback={this.responseGoogle}
        />
        <div>
          {data ? data.map((val, i) => (
            <div key={i}>
              <h3>{i+1} {val.heading}</h3>
              <span>{val.author}</span>
            </div>
          )): null}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  name: PropTypes.shape({
    data: PropTypes.Array
  })
};

const mapStateToProps = (state) => {
  return {
    name: state.login.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (credentials) => dispatch(login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
