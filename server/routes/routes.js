import express from 'express';
const router = express.Router();
import passport from 'passport';

router.get('/', (req, res) => {
    res.json({user:user})
});

//This is so you know if a Login attempt failed
router.get('/login', (req, res) => { 
  res.json({msg: "login failed"}); 
});

//This endpoint connects the User to Facebook
router.get('/login/facebook', passport.authenticate('facebook'));

//This endpoint is the Facebook Callback URL and on success or failure returns a response to the app
router.get('/return', passport.authenticate('facebook', {          
            failureRedirect: '/login' }), (req, res) => {
                     res.redirect('/');
});

export default router;