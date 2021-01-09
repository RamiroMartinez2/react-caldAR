import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signoutAction } from '../../../redux/actions/authActions';
import { SIGNOUT_FULFILLED } from '../../../redux/types/authTypes';
import style from './footer.module.css';

const Footer = ({
  signout,
  history
}) => {
  const onSignoutClick = () => {
    signout().then(action => {
      if (action.type === SIGNOUT_FULFILLED) {
        history.push('/');
      }
    });
  }
  return (
    <header>
      <div className={style.footerStyle}>
        <span>CaldAr The Best Choice, © Copyright 2021</span>
        <Button btnLabel="signout" onClick={() => onSignoutClick()} />
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    signout: signoutAction
  }, dispatch);
};

export default withRouter(connect(null, mapDispatchToProps)(Footer));
