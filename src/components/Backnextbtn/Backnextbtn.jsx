import './Backnextbtn.css';
import React from 'react';
import Backbtn from './Backbtn/Backbtn';
import Nextbtn from './Nextbtn/Nextbtn';

const Backnextbtn = ({ pokemon }) => {
  return (
    <>
      <div className="pokenavigate_btns">
        <Backbtn />
        <Nextbtn pokemon={pokemon} />
      </div>
    </>
  );
};

export default Backnextbtn;
