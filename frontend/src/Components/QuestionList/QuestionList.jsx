import React, { useContext } from 'react';
import Question from './Question/Question';
import Style from './QuestionList.module.scss';
import { SearchContext } from '../../Context/QuestionContext';

export default function QuestionList() {
    const {page,setPage,limit,setLimit,data} = useContext(SearchContext);
    
    function handleNext(){
     if(data && data.isMore){
         setPage((p)=>p+1);
     }
    }
    function handlePrev(){
     if(page>1){
         setPage((p)=>p-1);
     }
    }
    function handleLimit(e){
            setLimit(e.target.value)
        
    }
    if( data && data.success && data.questions.length>0){
        
        return (
            <>
            <div className={Style.questionList}>
      {data.success && data.questions.map((i,idx)=>{
          return (
              <>
              <Question question={i} key={idx}></Question>
              <hr></hr>
              </>
            )
        })}
    </div>
    <div className={Style.navigationButtons}>
        <div className={Style.left}>
            <button onClick={()=>handlePrev()} className={`${page>1?'':Style.disabled}`}>Prev</button>
            <button onClick={()=>handleNext()} className={`${data.isMore?'':Style.disabled}`}>Next</button>
        </div>
        <div className={Style.right}>
            <label htmlFor="limit">Limit : </label>
            <input type="number" name="limit" id="limit" value={limit} onChange={(e)=>handleLimit(e)}/>
        </div>
    </div>
        </>
  )
  }else{
    return (<>
      No Data Found
    </>)
  }
}
