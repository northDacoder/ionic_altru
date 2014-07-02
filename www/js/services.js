angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Providers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var providers = [
    { id: 0, name: 'Casey Ryan, MD', specialty: 'Internal Medicine, Diabetes, Endocrinology', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400, image: "caseyryan.jpg" },
    { id: 1, name: 'James Brosseau, MD', specialty: 'Internal Medicine, Diabetes, Endocrinology', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400 },
    { id: 2, name: 'Shanta Gautham, MD', specialty: 'Internal Medicine  ', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400 },
    { id: 3, name: 'David F. Frugone, MD', specialty: 'Internal Medicine, Diabetes, Endocrinology', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400},
    { id: 4, name: 'Allison Adams, PA', specialty: 'Internal Medicine', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400},
    { id: 5, name: 'Jon W. Allen, MD', specialty: 'Internal Medicine', location: 'Altru Main Clinic', city: 'Grand Forks, ND', phone: 7017806400},
    { id: 6, name: 'Somasundaram Bharath, MD, FACG', specialty: 'Internal Medicine, Gastroenterology', location: 'Altru Clinic', city: 'Devils Lake, ND', phone: 7016622157 },
    { id: 7, name: 'Thomas C Corbett, MD', specialty: 'Internal Medicine', location: 'Altru Clinic', city: 'Devils Lake, ND', phone: 7016622157},
    { id: 8, name: 'Shivali Devgon, MD', specialty: 'Internal Medicine', location: 'Altru Clinic', city: 'Rosseau, MN', phone: 7017806400}
  ];

  return {
    all: function() {
      return providers;
    },
    get: function(providerId) {
      // Simple index lookup
      return providers[providerId];
    }
  }
});
