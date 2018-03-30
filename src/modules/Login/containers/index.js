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
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.onSubmit(this.state);
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
