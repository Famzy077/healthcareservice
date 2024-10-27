// import localStrategy from 'passport-local'
// import { User } from "../model/User.js";
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken';  
// // {pkg} from 'jsonwebtoken';
// // const Strategy = localStrategy()

// const {verify} = jwt
//  const InitializePassport = (passport) =>{
//     passport.use(new localStrategy({usenameField: 'email'}, async(emal, passport, verify) =>{
//         try {
//             let user = await User.findOne({email: emal})
//             if(!user){
//                 return verify(null, null, {message: 'User can not be found'})
//             }
//             if(await bcrypt.compare(password, user.password)){
//                 return verify(null, user)
//             }else{
//                 return verify(null, null, {message: 'Incorrect Email / Password'})
//             }
//         } catch (error) {
//             verify(error)
//         }
//     }))

//     passport.serializeUser((user, done) => {
//         done(null, user._id)
//     })
//     passport.deserializeUser(async (id, done) => {
//         try {
//             let user = await User.findById(id)
//             if(!user){
//                 return done(null, null)
//             }
//             done(null, user)
//         } catch (error) {
//             console.log(error)
//         }
//     })
// }
// export default InitializePassport