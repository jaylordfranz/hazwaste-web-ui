// routes/wasteDisposalRoutes.js
const express = require('express');
const WasteDisposalLocation = require('../models/WasteDisposalLocation');
const haversine = require('haversine');
const router = express.Router();

// Fetch nearby waste disposal locations
router.get('/nearby', async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and Longitude are required' });
  }

  try {
    const locations = await WasteDisposalLocation.find();
    const nearbyLocations = locations.filter(location => {
      const from = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };
      const to = { latitude: location.latitude, longitude: location.longitude };

      // Calculate distance in kilometers (threshold of 10 km)
      const distance = haversine(from, to, { unit: 'km' });
      return distance <= 10; // Only include locations within 10 km
    });

    res.json({ nearbyLocations });
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).json({ message: 'Error fetching locations' });
  }
});

module.exports = router;
