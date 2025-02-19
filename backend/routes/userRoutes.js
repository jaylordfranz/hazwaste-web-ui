const express = require('express');
const bcrypt = require('bcrypt');
const { authenticateUser } = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();


router.put('/updateProfile', authenticateUser, async (req, res) => {
  try {
    const { username, password, location, phone_number } = req.body;
    const userId = req.user.id;

    if (!username || !location || !phone_number) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedData = { username, location, phone_number };

  
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

  
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error updating profile:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
