import React, { useReducer, useState } from 'react';
import Style from './Question.module.scss';
import { formReducer, formState } from './questionReducer';
import { Link } from 'react-router-dom';

export default function Question() {
    const [state,dispatch] = useReducer(formReducer,formState);
    const [inputText,setInputText] = useState('');
    const types = ['MCQ',"ANAGRAM","READ_ALONG","CONTENT_ONLY"];


 //function to handle all fields operations on various fields
 //type: field type, operation: add or remove, e: event 
 const handleOptions = ({type,operation='',e=''})=>{
   switch(type){
     case 'block':
      if(operation==="add"){
        if(inputText===''){
          alert('blank option not allowed');
        }else{
           setInputText('');
           dispatch({type:'addBlock',payload: inputText})
        }
      }else{
        if(state.blocks.length>0){
          dispatch({type:'removeBlock'});
        }
      }
      break;
      
      case 'option':
        if(inputText===''){
          alert('blank option not allowed');
        }else{
           setInputText('');
           dispatch({type:'addOption',payload: inputText})
        }
         break;

      case 'type':
        if(e.target.value===''){
          alert('blank value not allowed');
        }else{
          dispatch({type:'type',payload: e.target.value})
        } 
        break;
      
      case 'title':
          dispatch({type:'title',payload: e.target.value})
        
       break;
      default:
        break;

     }
  }

  //function to select answer for mcq option
 const selectOption =(idx)=>{
    dispatch({type: 'selectOption',payload: idx});
 }

 //function to set solution for anagram type
 const setSolution =(e)=>{
    dispatch({type: 'setSolution',payload: e.target.value});
 }

   const submit = async ()=>{
    console.log(state)
    try {
      let data = await fetch(`${process.env.REACT_APP_FETCH_URL}/add`,{
       method:"POST",
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify(state)
     });
     data = await data.json();
     console.log(data);
     alert("data submitted successfully");
    } catch (error) {
       alert("error occured");
    }
   }

  return (
    <>
    <div className={Style.navigation}>
          <button><Link to="/SpeakX">Search Question</Link></button>
          <button><Link to="/add">Add Question</Link></button>
        </div>
      <div className={Style.form}>
        <h3>Please Fill out following details:</h3>
        <span className={Style.heading}>Type</span>
        <div className={Style.types}>
          {/* question types list  */}
          {types.map((i)=>{
             return (
         <span key={i}>
         <input type="radio" id="type1" name="type" value={i} onChange={(e)=>handleOptions({type:'type',operation:null,e})} /> 
         <label htmlFor="type1">{i}</label>
         </span>
             )
          })}
        </div>
          <span className={Style.heading}>Title :</span>
          <input type="text" name='title' id='title' value={state.title} onChange={(e)=>handleOptions({type:'title',operation:null,e})}/>

        {/* mcq type  */}
        {state.type==='MCQ' &&<div>
          <span className={Style.heading}>Options :</span>
          <ol className={Style.mcqOption}>
            {state.options.map((i,idx)=>{
                return  (<li key={i.text}><input type='radio' name='option' onChange={()=>selectOption(idx)}/>{i.text}</li>)
            })}
        <input type="text" placeholder='Enter option' onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
         <button onClick={()=>handleOptions({type:'option',operation:'add'})}>Add</button> 
          </ol>
        </div>}

       {/* anagram type  */}
        {state.type==='ANAGRAM' &&<div>
          <span className={Style.heading}>Options :</span>
          <ol className={Style.anagramOption}>
            {state.blocks.map((i)=>{
                return  (<li key={i.text}>{i.text}</li>)
            })}
        <input type="text" placeholder='Enter option' onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
         <button onClick={()=>handleOptions({type:'block',operation:'add'})}>Add</button> 
         <button onClick={()=>handleOptions({type:'block',operation:'remove'})}>Rmove</button> 
        
          </ol>
            <span className={Style.heading}>Solution :</span>
            <input type="text" placeholder='Enter solution' onChange={setSolution} />

        </div>}
        <button onClick={submit}>Submit</button>
      </div>
    </>
  )
}
