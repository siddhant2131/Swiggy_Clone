const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { check } = require('express-validator');

// @route   GET /api/locations/search
// @desc    Search locations
// @access  Public
router.get('/search', [
  check('query', 'Search query is required').not().isEmpty()
], locationController.searchLocations);

// @route   POST /api/locations
// @desc    Create a location
// @access  Private (Admin)
router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('address', 'Address is required').not().isEmpty(),
  check('city', 'City is required').not().isEmpty(),
  check('state', 'State is required').not().isEmpty(),
  check('pincode', 'Pincode is required').not().isEmpty(),
  check('latitude', 'Latitude is required').isNumeric(),
  check('longitude', 'Longitude is required').isNumeric()
], locationController.createLocation);

// @route   GET /api/locations/:id
// @desc    Get location by ID
// @access  Public
router.get('/:id', locationController.getLocation);

// @route   PUT /api/locations/:id
// @desc    Update location
// @access  Private (Admin)
router.put('/:id', [
  check('name', 'Name is required').optional().not().isEmpty(),
  check('address', 'Address is required').optional().not().isEmpty(),
  check('city', 'City is required').optional().not().isEmpty(),
  check('state', 'State is required').optional().not().isEmpty(),
  check('pincode', 'Pincode is required').optional().not().isEmpty(),
  check('latitude', 'Latitude is required').optional().isNumeric(),
  check('longitude', 'Longitude is required').optional().isNumeric()
], locationController.updateLocation);

// @route   DELETE /api/locations/:id
// @desc    Delete location
// @access  Private (Admin)
router.delete('/:id', locationController.deleteLocation);

module.exports = router;