import React from 'react';
import Header from 'Components/header';

const LandingBanner = ({ showHeader, menuToggle }) => (
  <div className='col-xs-12'>
    <div className='row'>
      <div className='col-xs-12 landing-banner'>
        <div className='note'></div>
        <div className='menu-icon' onClick={() => menuToggle()}>
          <span className='glyphicon glyphicon-th'></span>
        </div>
        <Header showHeader={showHeader} />
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 about-us'>
        <h2>Manage Tasks, Create Deadlines to Meet.</h2>
        <p>Task Scheduler has everything you need to get your new task up & running in no time!</p>
        <p>All of the templates and themes on Start Bootstrap are open source, free to download,</p>
        <p>and easy to use. No strings attached!</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12 logo-branding'>
        <h2>Manage Tasks, Create Deadlines to Meet.</h2>
        <p>Task Scheduler has everything you need to get your new task up & running in no time!</p>
        <p>All of the templates and themes on Start Bootstrap are open source, free to download,</p>
        <p>and easy to use. No strings attached!</p>
      </div>
    </div>
  </div>
);

LandingBanner.propTypes = {
};

export default LandingBanner;
