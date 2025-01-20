import React from 'react'
import Style from './Question.module.scss';
function McqQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
        <ul className={Style.options}>
            {question.options.map((i)=>{
               return <li>
                <input type="checkbox" name={question.title} id={i.text} checked={i.isCorrectAnswer}/>
                <label htmlFor={i.text}>{i.text}</label>
               </li>
            })}
        </ul>
        </>
    )
}
function AnagQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
        <div className={Style.options}>
            {question.blocks.map((i,idx)=>{
               return  <p>{idx+1}. {i.text}</p>
               
            })}
        </div>
        <p><strong>Solution: </strong> {question.solution}</p>
        </>
    )
}
function WordQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
        </>
    )
}
function ContentQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
        </>
    )
}

function DefaultCase({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
         <hr />
        </>
    )
}
export default function Question({question}) {
    let type = question && question.type;
    switch(type){
         case "MCQ":
             return (<McqQuestion question={question}></McqQuestion>);
         case "ANAGRAM":
             return (<AnagQuestion question={question}></AnagQuestion>);
        case "READ_ALONG":
            return (<WordQuestion question={question}></WordQuestion>);
            case "CONTENT_ONLY":
            return (<ContentQuestion question={question}></ContentQuestion>)
        default:
            return (<DefaultCase question={question}></DefaultCase>);
            

    }
 
}
