const locationRepository = require('../repositories/locationRepository');
const { validationResult } = require('express-validator');

exports.searchLocations = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { query } = req.query;
    const locations = await locationRepository.searchLocations(query);
    
    if (!locations || locations.length === 0) {
      return res.status(404).json({ message: 'No locations found' });
    }

    res.json(locations);
  } catch (error) {
    console.error('Error searching locations:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const location = await locationRepository.createLocation(req.body);
    res.status(201).json(location);
  } catch (error) {
    console.error('Error creating location:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getLocation = async (req, res) => {
  try {
    const location = await locationRepository.findLocationById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error('Error getting location:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const location = await locationRepository.updateLocation(req.params.id, req.body);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const location = await locationRepository.deleteLocation(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({ message: 'Location deactivated successfully' });
  } catch (error) {
    console.error('Error deleting location:', error);
    res.status(500).json({ message: 'Server error' });
  }
};