import React, {useEffect, useState} from "react";
import "./forms.css";

import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Backendurl} from "../assets/Urls";
import {useSelector} from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  IconButton,
  Input,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddCircleOutline,
  CheckBox,
  Close,
  DeleteForever,
  FlipCameraIos,
  Radio,
  ShortText,
  ShortTextOutlined,
  SubjectOutlined,
} from "@mui/icons-material";
import Swal from "sweetalert2";
const CreateForm = () => {
  let [formtitle, setformtitle] = useState();
  let [formdesc, setformdesc] = useState();
  const param = useParams();
  let {token} = useSelector((Store) => Store.Auth);
let navigate=useNavigate()
  // ======================
  const [questions, setQuestions] = useState([
    {
      questionText: " ",
      questionType: "radio",
      options: [{optionText: ""}],
      answer: false,
      answerkey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  let Addform = async (e) => {
    e.preventDefault();
    let addformdata = await axios.post(
      `${Backendurl}/form/addnewform`,
      {
        form_id: param.id,
        formtitle: formtitle,
        formdesc: formdesc,
        questions: questions,
      },
      {headers: {token: token}}
    );

if(addformdata.data.msg="done"){
  Swal.fire("Sucessfull !", "Form Added Sucessfully !", "success");

  navigate("/")
}

    console.log(addformdata);
  };

  let ChangeQuestion = (text, i) => {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  };

  let changeOptionValue = (text, i, j) => {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion);
  };

  let addQuestiontype = (i, type) => {
    let qs = [...questions];
    qs[i].questionType = type;
    setQuestions(qs);
  };

  let removeOption = (i, j) => {
    var removeOptionqs = [...questions];
    if (removeOptionqs[i].options.length > 1) {
      removeOptionqs[i].options.splice(j, 1);
      setQuestions(removeOptionqs);
    }
  };

  let addoption = (i) => {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option" + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
    }
    setQuestions(optionsOfQuestion);
  };

  let Deletequestion = (i) => {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  };

  let requirdQuestion = (i) => {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    setQuestions(reqQuestion);
  };
  let addnewQuestionfield = () => {
    setQuestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{optionText: "option 1"}],
        open: true,
        required: false,
      },
    ]);
  };

  let setOptionAnswer = (ans, qno) => {
    var questionS = [...questions];
    questionS[qno].answerkey = ans;
    setQuestions(questionS);
    // console.log(ans)
  };

  let setOptionPoints = (points, qno) => {
    var questionS = [...questions];
    questionS[qno].points = points;
    setQuestions(questionS);
  };

  let AddAnswer = (i) => {
    let answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setQuestions(answerOfQuestion);
  };
  let DoneAnswer = (i) => {
    let answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setQuestions(answerOfQuestion);
  };

  let formui = () => {
    return questions.map((el, i) => (
      <Accordion expanded={el.open} className={el[i]?.open ? "add_border" : ""}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          elevation={1}
          style={{width: "100%"}}
        >
          {questions[i]?.open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  letterSpacing: "0.1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {i + 1}. {questions[i].questionText}
              </Typography>
              {el.options.map((op, j) => (
                <div key={j}>
                  <div style={{display: "flex"}}>
                    <FormControlLabel
                      style={{marginLeft: "5px", marginBottom: "5px"}}
                      disabled
                      control={
                        <input
                          type={el.questionType}
                          color="primary"
                          style={{marginRight: "1px"}}
                          required={el.type}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            fontSize: "13px",
                            fontWeight: "400",
                            letterSpacing: "0.2px",
                            lineHeight: "20px",
                            marginLeft: "10px",
                          }}
                        >
                          {el.options[j].optionText}
                        </Typography>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </AccordionSummary>
        <div className="question_boxes">
          {!questions[i].answer ? (
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Enter Question Here."
                   
                  onChange={(e) => ChangeQuestion(e.target.value, i)}
                />

                <Select className="select" style={{fontSize: "13px" ,width:"20%"}}>
                  <MenuItem
                    id="text"
                    value="Text"
                    onClick={() => addQuestiontype(i, "text")}
                  >
                    {" "}
                    <SubjectOutlined
                      style={{marginRight: "10px"}}
                    /> Paragraph{" "}
                  </MenuItem>
                  <MenuItem
                    id="number"
                    value="Number"
                    onClick={() => addQuestiontype(i, "number")}
                  >
                    {" "}
                    <SubjectOutlined
                      style={{marginRight: "10px"}}
                    /> Number{" "}
                  </MenuItem>
                  <MenuItem
                    id="date"
                    value="Date"
                    onClick={() => addQuestiontype(i, "date")}
                  >
                    {" "}
                    <SubjectOutlined
                      style={{marginRight: "10px"}}
                    /> Date{" "}
                  </MenuItem>
                  <MenuItem
                    id="chekbox"
                    value="Checkbox"
                    onClick={() => addQuestiontype(i, "checkbox")}
                  >
                    {" "}
                    <CheckBox
                      style={{marginRight: "10px"}}
                      checked
                    /> Chekbox{" "}
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    onClick={() => addQuestiontype(i, "radio")}
                  >
                    {" "}
                    <Radio style={{marginRight: "10px"}} /> Multiple type{" "}
                  </MenuItem>
                </Select>
              </div>

              {el.options.map((ops, j) => (
                <div className="add_question_body" key={j}>
                  {el.questionType != "text" ? (
                    <input
                      type={el.questionType}
                      style={{marginRight: "10px"}}
                    />
                  ) : (
                    <ShortText style={{marginRight: "10px"}} />
                  )}

                  <div>
                    <input
                         type={el.questionType}
                      className="text_input"
                      placeholder="optios"
                      value={el.options[j].optionText}
                      onChange={(e) => {
                        changeOptionValue(e.target.value, i, j);
                      }}
                    />
                  </div>

                  <IconButton aria-label="delete">
                    <Close
                      onClick={() => {
                        removeOption(i, j);
                      }}
                    />
                  </IconButton>
                </div>
              ))}

              {el.options.length < 5 ? (
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      el.questionType != "text" ? (
                        <Input
                          type={el.questionType}
                          color="primary"
                          inputProps={{"aria-lable": "secondary checkbox"}}
                          style={{marginLeft: "10px", marginRight: "10px"}}
                          disabled
                        
                        />
                      ) : (
                        <ShortTextOutlined style={{marginRight: "10px"}} />
                      )
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          style={{fontSize: "13px", width: "60px"}}
                          placeholder="Add Other"
                        />
                        <Button
                          size="small"
                          style={{
                            textTransform: "none",
                            fontSize: "13px",
                            fontWeight: "600",
                            color: "#4285f4",
                          }}
                          onClick={() => addoption(i)}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}
              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      AddAnswer(i);
                    }}
                  >
                    <FlipCameraIos
                      style={{
                        border: "2px solid #4285f4",
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />
                    Answer Key
                  </Button>
                </div>

                <div className="add_question_bottom">
                  <span style={{fontSize: "13px"}}>Required</span>
                  <Switch
                    name="Checkbox"
                    color="primary"
                    onClick={() => requirdQuestion(i)}
                  />
                  <IconButton aria-lable="copy">
                    <DeleteForever
                      onClick={() => {
                        Deletequestion(i);
                      }}
                    />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
          ) : (
            <AccordionDetails className="add_question">
              <div className="topHeader">Choose Correct Answer</div>
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={el.questionText}
                  onChange={(e) => ChangeQuestion(e.target.value, i)}
                  disabled
                  required={true}
                />

                <input
                  type="number"
                  className="points"
                  min="0"
                  step="1"
                  required={true}
                  placeholder="0"
                  onChange={(e) => setOptionPoints(e.target.value, i)}
                />
              </div>

              {el.options.map((ops, j) => (
                <div
                  className="add_question_body"
                  key={j}
                  style={{
                    marginLeft: "8px",
                    marginBottom: "10px",
                    marginTop: "5px",
                  }}
                >
                  <div key={j}>
                    <div style={{display: "flex"}} className="">
                      <div className="form-check">
                        <lable
                          style={{fontSize: "13px"}}
                          onClick={() => {
                            setOptionAnswer(el.options[j].optionText, i);
                          }}
                        >
                          {el.questionType != "text" ? (
                            <input
                              type={el.questionType}
                              name={el.questionText}
                              value="option 3 "
                              className="form-check-input"
                              required={el.required}
                              style={{
                                marginTop: "5px",
                                marginBottom: "10px",
                                marginRight: "10px",
                              }}
                            />
                          ) : (
                            <ShortText />
                          )}
                          {el.options[j].optionText}
                        </lable>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="add_question_body">
                <Button
                  size="small"
                  style={{
                    textTransform: "none",
                    color: "#4285f4",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  <FlipCameraIos
                    style={{
                      marginRight: "8px",
                      fontSize: "20px",
                    }}
                  />
                  Add Answer Feedback
                </Button>
              </div>

              <div className="add_question_bottom">
                <Button
                  onClick={() => {
                    DoneAnswer(i);
                  }}
                  color="primary"
                  variant="outline"
                >
                  Done
                </Button>
              </div>
            </AccordionDetails>
          )}

          <div className="question_edit">
            <AddCircleOutline className="edit" onClick={addnewQuestionfield} />
          </div>
        </div>
      </Accordion>
    ));
  };

  return (
    <div>
      <div className="question_form">
        <br />
        <br />
        <form onSubmit={(e) => Addform(e)}>
          <div className="section">
            <div className="question_title_section">
              <div className="question_form_top">
                <input
                  type="text"
                  className="q_form_top_name"
                  placeholder="Untitled Document"
                  // defaultValue={formdata?.formtitle}
                  onChange={(e) => {
                    setformtitle(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="q_form_top_desc"
                  placeholder="Form Description"
                  onChange={(e) => {
                    setformdesc(e.target.value);
                  }}
                  // defaultValue={formdata?.formdesc}
                />
              </div>
            </div>
            {formui()}
          <button className="btn-primary m-4 bg-indigo-400 hover:bg-indigo-600 text-white border p-2 text-center" type="submit">Save Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
