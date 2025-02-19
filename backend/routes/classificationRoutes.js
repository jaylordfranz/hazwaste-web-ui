const express = require('express');
const Classification = require('../models/Classification');

const router = express.Router();


router.get('/recent', async (req, res) => {
  try {
    const classifications = await Classification.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json(classifications);
  } catch (error) {
    console.error('Error fetching recent classifications:', error);
    res.status(500).json({ error: 'Failed to fetch recent classifications' });
  }
});

module.exports = router;
