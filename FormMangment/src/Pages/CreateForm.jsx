import React, {useState} from "react";
import "./forms.css";
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
  BroadcastOnPersonalSharp,
  CheckBox,
  Close,
  CropOriginal,
  DeleteForever,
  FilterNone,
  FlipCameraIos,
  OndemandVideo,
  Radio,
  ShortText,
  ShortTextOutlined,
  Subject,
  SubjectOutlined,
} from "@mui/icons-material";

const CreateForm = () => {
  const [question, setquestion] = useState([
    {
      questionText: "Which Framework is the best?",
      questionType: "radio",
      options: [
        {optionText: "react"},
        {optionText: "angular"},
        {optionText: "vue"},
        {optionText: "nextjs"},
      ],
      answer: false,
      answerkey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  let ChangeQuestion = (text, i) => {
    var newQuestion = [...question];
    newQuestion[i].questionText = text;
    setquestion(newQuestion);
    console.log(newQuestion);
  };

  let changeOptionValue = (text, i, j) => {
    var optionsQuestion = [...question];
    optionsQuestion[i].options[j].optionText = text;
    setquestion(optionsQuestion);
  };

  let addQuestiontype = (i, type) => {
    let qs = [...question];
    qs[i].questionType = type;
    setquestion(qs);
  };

  let removeOption = (i, j) => {
    var removeOptionqs = [...question];
    if (removeOptionqs[i].options.length > 1) {
      removeOptionqs[i].options.splice(j, 1);
      setquestion(removeOptionqs);
    }
  };

  let addoption = (i) => {
    var optionsOfQuestion = [...question];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option" + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
    }
    setquestion(optionsOfQuestion);
  };

  let Deletequestion = (i) => {
    let qs = [...question];
    if (question.length > 1) {
      qs.splice(i, 1);
    }
    setquestion(qs);
  };

  let requirdQuestion = (i) => {
    var reqQuestion = [...question];
    reqQuestion[I].required = !reqQuestion[i].required;
    setquestion(reqQuestion);
  };
  let addnewQuestionfield = () => {
    setquestion([
      ...question,
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
    var questionS = [...question];
    questionS[qno].answerkey = ans;
    setquestion(questionS);
    console.log(ans)
  };

  let setOptionPoints = (points, qno) => {
    var questionS = [...question];
    questionS[qno].points = points;
    setquestion(questionS);
  };

  let AddAnswer = (i) => {
    let answerOfQuestion = [...question];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setquestion(answerOfQuestion);

  };
  let DoneAnswer = (i) => {
    let answerOfQuestion = [...question];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setquestion(answerOfQuestion);
  };

  function QuestionsUi() {
    return question.map((el, i) => (
      <Accordion expanded={el.open} className={el[i]?.open ? "add_border" : ""}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          elevation={1}
          style={{width: "100%"}}
        >
          {question[i].open ? (
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
                {i + 1}. {question[i].questionText}
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
          {!question[i].answer ? (
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={el.questionText}
                  onChange={(e) => ChangeQuestion(e.target.value, i)}
                />
                <CropOriginal />
                <Select className="select" style={{fontSize: "13px"}}>
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
                      type="text"
                      className="text_input"
                      placeholder="optios"
                      value={el.options[j].optionText}
                      onChange={(e) => {
                        changeOptionValue(e.target.value, i, j);
                      }}
                    />
                  </div>

                  <CropOriginal />
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
                />

                <input
                  type="number"
                  className="points"
                  min="0"
                  step="1"
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
            <OndemandVideo className="edit" />
            <CropOriginal className="edit" />
            <TextField className="edit" />
          </div>
        </div>
      </Accordion>
    ));
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
                placeholder="Untitled Document"
              />
              <input
                type="text"
                className="q_form_top_desc"
                placeholder="Form Description"
              />
            </div>
          </div>

          {QuestionsUi()}
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
