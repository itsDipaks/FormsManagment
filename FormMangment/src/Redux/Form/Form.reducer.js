import {
  CHANGE_TYPE,
  SET_DOC_DESC,
  SET_DOC_NAME,
  SET_QUESTIONS,
} from "./Form.type";
let initialstate = {
  question:[{ questionText: "Ques",
  questionType: "radio",
  options: [
    {optionText: "option1"},
    
  ],
   
  open: true,
  required: false,}],
  questionType:"radio"
  ,doc_name:"Untitled Form",
  doc_desc:"Add The Description"
 
};

export const FormReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case SET_QUESTIONS: {
      return {
        ...state,
        question: payload,
      };
    }
    case CHANGE_TYPE: {
      return {
        ...state,
        questionType:payload
      }
    }
    case SET_DOC_NAME: {
      return {
        ...state,
        doc_name:payload
      }
    }
    case SET_DOC_DESC: {
      return {
        ...state,
        doc_desc:payload
      };
    }
    default:
      return state;
  }
};
