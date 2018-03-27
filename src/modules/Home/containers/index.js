import React from 'react';
import { connect } from 'react-redux';
import LandingBanner from '../components/LandingBanner';
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
    const { openHeader } = this.state;
    return (
      <div className='row'>
        <LandingBanner showHeader={openHeader} menuToggle={() => this.openHeader()} />
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
