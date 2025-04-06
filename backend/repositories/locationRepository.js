const Location = require('../models/Location');

class LocationRepository {
  async createLocation(locationData) {
    const location = new Location(locationData);
    return await location.save();
  }

  async findLocationById(id) {
    return await Location.findById(id);
  }

  async searchLocations(query) {
    return await Location.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { address: { $regex: query, $options: 'i' } },
        { city: { $regex: query, $options: 'i' } }
      ],
      isActive: true
    }).limit(10);
  }

  async getAllLocations() {
    return await Location.find({ isActive: true });
  }

  async updateLocation(id, updateData) {
    return await Location.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteLocation(id) {
    return await Location.findByIdAndUpdate(id, { isActive: false }, { new: true });
  }
}

module.exports = new LocationRepository();