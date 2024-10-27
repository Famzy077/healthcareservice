//  export const checkNoAuth = (req, res, next) => {
//     if(!req.isAuthenticated()){
//         return res.redirect('/login')
//     }
//     next();
// }

// export const checkAuth = (req, res, next) => {
//     if(req.isAuthenticated()){
//         return res.redirect('/home')
//     }
//     next()
// }