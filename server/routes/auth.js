import express from 'express';
const router = express.Router();
import passport from 'passport';

// Handle jwt signing and login
router.get('/loginsucc', (req, res) => {
  console.log(req.user);
  res.send('Success');
});

// This is so you know if a Login attempt failed
router.get('/loginfailed', (req, res) => { 
  res.status(404).json({msg: 'Error! Login Failed.'}); 
});

// This endpoint connects the User to Facebook
router.get('/login', passport.authenticate('facebook', {scope: ['email']}));

// This endpoint is the Facebook Callback URL and on success or failure returns a response to the app
router.get('/return', passport.authenticate('facebook', {          
  failureRedirect: '/auth/loginfailed'
}), (req, res) => {
  res.json(req.user);
}
);

export default router;