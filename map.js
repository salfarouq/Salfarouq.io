var map = L.map('map').setView([-6.1744, 39.2364], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);
var amaniCottagesMarker = L.marker([-6.1739, 39.2346]).addTo(map);
amaniCottagesMarker.bindPopup("<b>Amani Cottages</b><br>Charming cottages with sea views").openPopup();
