const User = require('../model/usermodel');

const submitForm = async(req, res)=> {
const {firstName,lastName, email, contactNumber, gender,language,uploadResume, enterUrl,about} = req.body;
    try{
        const newSubmitform = new Submitform({
            firstName,
            lastName,
            email,
            contactNumber,
            gender,
            language,
            uploadResume,
            enterUrl,
            about
        });
        await newSubmitform.save();
        res.status(200).json({message: 'Form submitted successfully'});
    } catch(error){
        console.error('Error adding form: ', error);
        res.status(500).json({message: 'failed to add form'});
    }

}

module.exports = submitForm