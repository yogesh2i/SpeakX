import React, { useContext, useState } from 'react';
import Style from './Filters.module.scss';
import { SearchContext } from '../../Context/QuestionContext';

const filters = [
  {
    "text": "All",
    "value": "All"
  },
  {
    "text": "mcq",
    "value": "MCQ"
  },
  {
    "text": "Read along",
    "value": "READ_ALONG"
  },
  {
    "text": "Content only",
    "value": "CONTENT_ONLY"
  },
  {
    "text": "Anagram",
    "value": "ANAGRAM"
  }
];

export default function Filters() {
  const { setFilter, setPage } = useContext(SearchContext);
  const [currentBtn, setCurrentBtn] = useState(0);

  function handleClick(index) {
    setCurrentBtn(index);
    setPage(1);
    setFilter(filters[index].value);
  }

  return (
    <div className={Style.filters}>
      <div>
        {filters.map((i, index) => {
          return (
            <button onClick={() => handleClick(index)} className={currentBtn === index ? Style.current : ''} key={i.value}>{i.text}</button>
          )
        })}
      </div>
    </div>
  )
}
