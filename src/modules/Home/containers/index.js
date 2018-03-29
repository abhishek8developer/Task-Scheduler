import React from 'react';
import { connect } from 'react-redux';
import StaticHomeView from '../components/LandingBanner';
import { changeName } from '../../../redux/actions';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abhi',
      pass: '123',
      openHeader: false
    };
    this.openHeader = this.openHeader.bind(this);
  }
  openHeader() {
    const { openHeader } = this.state;
    this.setState({ openHeader: !openHeader });
  }
  render() {
    console.log(this.state, '=============');
    const { openHeader } = this.state;
    return (
      <div className='row'>
        <StaticHomeView showHeader={openHeader} menuToggle={() => this.openHeader()} />
      </div>
    );
  }
}

Home.propTypes = {
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
