import nodemailer from 'nodemailer';

const Sendotp = async(req,res,next)=>{
    const email = req.params.id
    const otp = Math.floor(Math.random() * (999999 - 100000 + 1) ) + 100000;
    console.log(email)
    console.log(otp)
    try{
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'technicalhubdriverready@gmail.com',
              pass: 'aqlp joww mqgk fmbw'
            }
          });
          
          var mailOptions = {
            from: 'technicalhubdriverready@gmail.com',
            to: email,
            subject: 'Welcome To ASTEC',
            text: 'This Is Your One Time Password  '+otp+
            ' Never Share Your OTP to Any One..!',
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          return res.send({otp})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({otp})
}

export default Sendotp;