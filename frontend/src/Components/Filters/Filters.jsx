import React, { useContext, useState } from 'react';
import Style from './Filters.module.scss';
import { SearchContext } from '../../Context/QuestionContext';

export default function Filters() {
    const {setFilter,setPage} = useContext(SearchContext);
    const filters = [
        {"text": "All",
         "value": "All"
        },
        {"text": "mcq",
         "value": "MCQ"
        },
        {"text": "Read along",
         "value": "READ_ALONG"
        },
        {"text": "Content only",
         "value": "CONTENT_ONLY"
        },
        {"text": "Anagram",
         "value": "ANAGRAM"
        }
    ]
    const [crntBtn,setCrntBtn] = useState(0);

 function handleClick(index){
    setCrntBtn(index);
    setPage(1);
    setFilter(filters[index].value);
 }

  return (
    <div className={Style.filters}>
       <div>
        {filters.map((i,index)=>{
          return (
          <button onClick={()=>handleClick(index)} className={crntBtn===index?Style.current:''} key={i.value}>{i.text}</button>
        )
        })}        
       </div>
    </div>
  )
}
