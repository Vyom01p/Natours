/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    const locationsData = mapElement.dataset.locations;

    // SAFETY CHECK 1: Is the data completely missing?
    if (!locationsData || locationsData === 'undefined') {
      return console.log('No location data found for this tour.');
    }

    const locations = JSON.parse(locationsData);

    // SAFETY CHECK 2: Is the array empty?
    if (locations.length === 0) {
      return console.log('Location array is empty. Cannot draw map.');
    }

    // SAFETY CHECK 3: Prevent "Already Initialized" on hot-reloads
    let container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map('map', { zoomControl: false });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const points = [];

    locations.forEach((loc) => {
      const lat = loc.coordinates[1];
      const lng = loc.coordinates[0];

      points.push([lat, lng]);

      L.marker([lat, lng])
        .addTo(map)
        .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
          autoClose: false,
          className: 'mapPopup',
        })
        .openPopup();
    });

    const bounds = L.latLngBounds(points);
    map.fitBounds(bounds, {
      padding: [100, 100],
    });
  }
});
