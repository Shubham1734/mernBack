// backend/routes/api.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// API endpoint to handle user data submission
router.post('/submitUser', async (req, res) => {
try {
    // Validate and save user data to the database
    console.log(req.body)
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: 'User data saved successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

module.exports = router;
