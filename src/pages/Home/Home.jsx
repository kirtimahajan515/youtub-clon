import React, { useState } from 'react'
import "./Home.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
const Home = ({sidebar}) => {

  const [category, setCatagory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCatagory={setCatagory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home;