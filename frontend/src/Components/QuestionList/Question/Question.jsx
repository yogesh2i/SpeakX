import React from 'react'
import Style from './Question.module.scss';
function McqQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
        </>
    )
}
function AnagQuestion({question}){
    return (
        <>
        <p className={Style.type}>*{question.type}</p>
        <p className={Style.title}>{question.title}</p>
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
