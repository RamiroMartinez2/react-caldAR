import React from "react";
import style from "./main.module.css";
import app from '../../../firebase/base'

const Home = () => {
  return (
    <div>
      <div className={style.title}>
        <h1>CaldAR</h1>
        <h2>The Best Choice</h2>
        <button className={style.btnLogin} onClick={() => app.auth().signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
