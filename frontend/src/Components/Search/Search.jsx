import React, { useContext } from 'react'
import Style from './Search.module.scss';
import { SearchContext } from '../../Context/QuestionContext';

export default function Search() {
  const { query, setQuery, setPage } = useContext(SearchContext);

  const handleQuery =(e)=> {
    setPage(1);
    setQuery(e.target.value);
  }
  return (
    <>
      <input type="text" name="query" id="query" placeholder='Enter Title Here' className={Style.query} value={query} onChange={(e) => handleQuery(e)} />
    </>
  )
}
