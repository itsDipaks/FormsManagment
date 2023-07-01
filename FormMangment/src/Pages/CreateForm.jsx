import React, {useState} from "react";
import "./forms.css";
const CreateForm = () => {
  const [question, setquestion] = useState([
    {
      questionText: "Which Framwork is the best ?",
      questionType: "radio",
      options: [
        {optionText: "react"},
        {optionText: "angular"},
        {optionText: "vue"},
        {optionText: "nextjs"},
      ],
      open: true,
      required: false,
    },
  ]);

  function QuestionsUi(){
return <div>hii compo</div>
  }
  return (
    <div>
      <div className="question_form">
        <br />
        <br />
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="q_form_top_name"
                placeholder="Untitled Documet"
              ></input>
              <input
                type="text"
                className="q_form_top_desc"
                placeholder="Form Description"
              ></input>
            </div>
          </div>
       {   QuestionsUi()}
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
