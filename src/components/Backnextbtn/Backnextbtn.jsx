import './Backnextbtn.css';
import React from 'react';
import Backbtn from './Backbtn/Backbtn';
import Nextbtn from './Nextbtn/Nextbtn';

const Backnextbtn = () => {
  return (
    <>
      <div className="pokenavigate_btns">
        <Backbtn />
        <Nextbtn />
      </div>
    </>
  );
};

export default Backnextbtn;
