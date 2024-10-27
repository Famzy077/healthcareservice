import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router();
import { User } from '../model/User.js';
import nodemailer from 'nodemailer'

router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.json({message: 'user already existed'})
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new  User({
        username,
        email,
        password: hashPassword,
    })
    await newUser.save() 
    return res.json({ status: true, message: 'record registered'})
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        console.log('User is not registered')
        return res.json({message: 'User is not registered'})
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        console.log('Password is incorrect');
        return res.json({message: 'Password is incorrect'})
    }

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true, maxAge: 360000});
    return res.json({status: true, message: 'login successfully'})
})  



router.post('/forgot-password', async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: 'user not resgistered'})
        }
        const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '5m'})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akinolafemi077@gmail.com',
              pass: 'jinx azdo zgad ldzj'
            }
          });
          
          var mailOptions = {
            from: 'akinolafemi077@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              alert('User can not be found')
              return res.json({message: 'error sending email'})
            } else {
              return res.json({status: true, message: 'email sent'})
            }
          });
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

})

router.post('/resetPassword/:token', async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    try {
        const decoded = await jwt.verify(token, process.env.KEY);
        const id = decoded.id;
        const hashPassword = await bcrypt.hash(password, 10)
        await User.findByIdAndUpdate({_id: id}, {password: hashPassword})
        return res.json({status: true, message: 'Updated Password'})
    } catch (error) {
        return res.json('invalid token')
    }
})

const verifyUser = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.json({status: false, message: 'no valid token'})
        }else{
            const decoded = await jwt.verify(token, process.env.KEY);
            next()
        }
    }
    catch(error){
        console.log(error)
    }
}
router.get('/verify', verifyUser, (req, res, ) => {
    return res.json({status: true, message: 'authorized'})
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({status: true})
})
export default router