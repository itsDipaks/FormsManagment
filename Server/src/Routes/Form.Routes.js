let {Router} = require("express");
const { FormModel } = require("../Models/Form.model");
const { Authenticate } = require("../Middleware/Authentication.Middleware");


let FormRouter = Router();


FormRouter.post("/generateform", Authenticate,async(req,res)=>{
    const user_id=req.body.user_id
    try {
        const Form =  FormModel( 
          { questions:[ {questionText: "",
            questionType: "",
            options: [
              {optionText: ""},
            
            ],
            answer: false,
            answerkey: "",
            open: true,
            required: false,
           
          }],
          formtitle:"Untitled Form",
          formdesc:"Untitled form with no descrition",
          user_id:user_id
        },
          );
          await Form.save();
          console.log(Form)
 res.send({"newForm_id":Form._id})

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
})



FormRouter.get('/userforms', Authenticate,async (req, res) => {
    // console.log(req.body)
    try {
      const user = await FormModel.find({ user_id:req.body.user_id});
      res.json(user);
    } catch (error) {
    //   console.error(error);/
      res.status(500).json({ error: 'Server error' });
    }
  });
  


module.exports={FormRouter}