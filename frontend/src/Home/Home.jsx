import React from 'react';
import Style from './Home.module.scss';
import Search from '../Components/Search/Search';
import Filters from '../Components/Filters/Filters';
import QuestionList from '../Components/QuestionList/QuestionList';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
      <>
        <div className={Style.navigation}>
          <button><Link to="/SpeakX">Search Question</Link></button>
          <button><Link to="/add">Add Question</Link></button>
        </div>
      <main className={Style.main}>
        <Search></Search>
        <Filters></Filters>
       <QuestionList></QuestionList>
       </main>

      </>
  )
}
