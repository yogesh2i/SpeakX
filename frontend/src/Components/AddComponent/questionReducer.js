export const formState = {
    title : '',
    type: '',
    blocks: [],
    options: [],
    solution: '',
    anagramType: ''
}

export function formReducer(state,action){
    switch (action.type){
        case 'title':
            let title = action.payload;
           return {...state,title: title};

        case 'type':
            let type = action.payload;
            //reset state while selecting question
            return {...formState,type: type.trim()};

        case 'addBlock':
            let block = {
                text: action.payload.trim(),
                showInOption: true,
                isAnswer: true
            }
            return {...state,blocks: [...state.blocks,block]};

        case 'removeBlock':
            const newBlocks = state.blocks.slice(0,-1);
            return {...state,blocks : newBlocks};
        
        case 'addOption':
            let option = {
                text: action.payload,
                isCorrectAnswer: false,
            }
            return {...state,options: [...state.options,option]}

        case 'selectOption':
            let newOptions = state.options.map((i,idx)=>{
                  if(idx===action.payload){
                    return {...i,isCorrectAnswer:true}
                }else{
                      return {...i,isCorrectAnswer:false}

                  }
            });
            return {...state,options: newOptions};

        case 'setSolution':
            return {...state,solution:action.payload};
        
        default:
            break;
    }
}