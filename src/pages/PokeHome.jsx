import React, { useState } from 'react';
import PokeApi from '../api/PokeApi';
import Navbar from './components/Navbar/Navbar';

const PokeHome = () => {
  const [newPkm, setNewPkm] = useState('');

  return (
    <>
      <Navbar setNewPkm={setNewPkm} />
      <PokeApi newPkm={newPkm} />
    </>
  );
};

export default PokeHome;
