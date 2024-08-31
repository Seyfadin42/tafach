import React, { useState } from 'react';
import './home.css';

import Header from '../../components/header/header';
import ExpMenu from '../../components/expMenu/expmenu';
import Foodisp from '../../components/FoodDisp/foodisp';
import Appdown from '../../components/download/appDown';

function Home() {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExpMenu category={category} setCategory={setCategory} />
      <Foodisp category={category} />
      <Appdown />
    </div>
  );
}

export default Home;