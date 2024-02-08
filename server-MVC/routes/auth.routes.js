import Routes from 'express';

const router = Routes();

router.post('/register', (req, res) => res.send('Register'));
router.post('/login', (req, res) => res.send('Login'));
router.get('/logout', (req, res) => res.send('Logout'));
