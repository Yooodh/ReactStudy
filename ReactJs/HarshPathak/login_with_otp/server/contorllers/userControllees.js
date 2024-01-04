const users = require('../models/userSchema');

exoprts.userregister = async (req, res) => {
  const { fname, email, password } = req.body;

  if (!fname || !email || !password) {
    res.status(400).json({ error: 'Please Enter All Input Data' });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      res.status(400).json({ error: 'This User Allready exist in our db' });
    } else {
      const userregister = new users({
        fname,
        email,
        password,
      });
    }
  } catch (error) {}
};
