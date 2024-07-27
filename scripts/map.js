mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVvc3R1ZGlvIiwiYSI6ImNsbHI0dzNlZzBpeGcza28wN3poZ2kyaDkifQ.8jcIDMyngTd6XLhNt5jOEA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [-74.07844601229404, 40.645900819853786],
  zoom: window.innerWidth > 1024 ? 14.5 : 14.5,
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
var locations = [
  {
    category: "Main",
    name: "Jasper Hunter's Point",
    lat: 40.645900819853786,
    lon: -74.07844601229404,
    address: "5 Stuyvesant Pl, Staten Island, NY 10301",
  },
  {
    category: "Restaurant",
    name: "Craft House",
    lat: 40.6363856,
    lon: -74.0775379,
    address: "60 Van Duzer St, Staten Island, NY 10301",
  },
  {
    category: "Restaurant",
    name: "Steiny's Pub",
    lat: 40.6423855,
    lon: -74.0792673,
    address: "3 Hyatt St, Staten Island, NY 10301",
  },
  {
    category: "Restaurant",
    name: "Ruddy & Dean American Steakhouse",
    lat: 40.6439854,
    lon: -74.0794641,
    address: "44 Richmond Ter, Staten Island, NY 10301",
  },
  {
    category: "Restaurant",
    name: "The Hop Shoppe",
    lat: 40.6291452,
    lon: -74.082305,
    address: "372 Van Duzer St, Staten Island, NY 10304",
  },
  {
    category: "Restaurant",
    name: "Beso",
    lat: 40.6402571,
    lon: -74.0784659,
    address: "70 Bay St, Staten Island, NY 10301",
  },
  {
    category: "Restaurant",
    name: "Talay",
    lat: 40.642443,
    lon: -74.0792751,
    address: "154 Stuyvesant Pl, Staten Island, NY 10301",
  },
  {
    category: "Shop",
    name: "Empire Outlets",
    lat: 40.64434123629934,
    lon: -74.07517933387156,
    address: "55 Richmond Ter, Staten Island, NY 10301",
  },
  {
    category: "Shop",
    name: "Gap Factory",
    lat: 40.6444449,
    lon: -74.0788498,
    address: "55 Richmond Ter, Staten Island, NY 10301",
  },
  {
    category: "Shop",
    name: "Key Food Supermarkets",
    lat: 40.638152,
    lon: -74.0782135,
    address: "155 Bay St, Staten Island, NY 10301",
  },
  {
    category: "Shop",
    name: "Bake Culture",
    lat: 40.64501857836435,
    lon: -74.07470739977069,
    address: "55 Richmond Ter, Staten Island, NY 10301",
  },
  {
    category: "Shop",
    name: "Hypno-Tronic Comics",
    lat: 40.6423996,
    lon: -74.0792352,
    address: "156 Stuyvesant Pl, Staten Island, NY 10301",
  },
  {
    category: "Fitness",
    name: "BADASS BOOTCAMP",
    lat: 40.6436669,
    lon: -74.0779231,
    address: "35b Richmond Ter SUITE 211A, Staten Island, NY 10301",
  },
  {
    category: "Fitness",
    name: "North Shore Waterfront Esplanade Park",
    lat: 40.6480441,
    lon: -74.0841793,
    address: "Bank St, Staten Island, NY 10301",
  },
  {
    category: "Fitness",
    name: "St. George Pharmacy",
    lat: 40.6438345,
    lon: -74.0799709,
    address: "99 Stuyvesant Pl, Staten Island, NY 10301",
  },
  {
    category: "Fitness",
    name: "The Living Roof",
    lat: 40.6443153,
    lon: -74.0744269,
    address: "1 Ferry Terminal Viaduct, Staten Island, NY 10301",
  },
  {
    category: "Fitness",
    name: "Staten Island University Hospital Community Park",
    lat: 40.6451432,
    lon: -74.0796182,
    address: "75 Richmond Ter, Staten Island, NY 10301",
  },
  {
    category: "Transportation",
    name: "St. George Ferry Terminal (Staten Island Ferry)",
    lat: 40.64417823395516,
    lon: -74.07256023782809,
    address: "1 Bay St, Staten Island, NY 10301",
  },
  {
    category: "Transportation",
    name: "St. George Station (SI Railroad)",
    lat: 40.64412361627201,
    lon: -74.07336598923206,
    address: "Staten Island, NY 10301",
  },
  {
    category: "Transportation",
    name: "Richmond Terrace/Stuyvesant Place Bus Stop (S40, S44)",
    lat: 40.646034,
    lon: -74.0809723,
    address: "Staten Island, NY 10301",
  },
  {
    category: "Transportation",
    name: "St Marks Place/Hamilton Avenue Bus Stop (S42, S52)",
    lat: 40.6450025,
    lon: -74.083084,
    address: "Staten Island, NY 10301",
  },
  {
    category: "Transportation",
    name: "NYC Fast Ferry (NYC Ferry)",
    lat: 40.64560145049977,
    lon: -74.07483011945241,
    address: "1 Bay St, Staten Island, NY 10301",
  },
];

const renderMapItems = (_locations) =>
  (document.getElementById("map-items").innerHTML = _locations
    .map(
      (el, id) =>
        `<div class="map-button-container"><button class='clean-button map-item-button' onclick="highlightItem('${el.name.replace(
          "'",
          "\\'"
        )}', ${id + 1})"><div class="circle-list-item">${id + 1}</div> ${
          el.name
        }</button></div>`
    )
    .join(" ")
    .toString());

const _locations = locations.filter((location) => {
  return location.category === "Restaurant";
});

map.on("load", function () {
  map.loadImage("/assets/pin.png", (error, image) => {
    if (error) {
      console.log(error);
      throw error;
    }
    map.addImage("pin", image);

    map.addSource("locations", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: createFeatures(_locations),
      },
    });
    map.addSource("locations-number", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: createFeatures(_locations),
      },
    });

    renderMapItems(_locations);
    const locationsLoaded = map.getLayer("location-highlighted") ? true : false;

    map.addLayer(
      {
        id: "locations",
        source: "locations",
        type: "symbol",
        layout: {
          "icon-image": "pin",
          "icon-size": 1,
          "text-field": ["get", "label"],
          "text-font": ["Arial Unicode MS Bold"],
          "text-offset": [0, 0],
          "text-size": 12,
          // "text-allow-overlap": true,
          // "text-ignore-placement": true,
          // "icon-allow-overlap": true,
          // "icon-ignore-placement": true,
        },
        paint: {
          "text-color": "#2d3434",
        },
      },
      locationsLoaded ? "location-highlighted" : undefined
    );

    map.on("mouseenter", "locations", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "locations", () => {
      map.getCanvas().style.cursor = "";
    });

    map.on("click", "locations", (e) => {
      if (!e.features[0]) return;
      highlightItem(
        e.features[0].properties.name,
        e.features[0].properties.label
      );
    });
  });

  map.loadImage("/assets/pin-highlighted.png", (error, image) => {
    if (error) return;
    map.addImage("pin-highlighted", image);

    map.addSource("location-highlighted", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });
    map.addSource("location-highlighted-number", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    map.addLayer({
      id: "location-highlighted",
      source: "location-highlighted",
      type: "symbol",

      layout: {
        "icon-image": "pin-highlighted",
        "icon-size": 1.3,
        "text-field": ["get", "label"],
        "text-font": ["Arial Unicode MS Bold"],
        "text-offset": [0, 0],
        "text-size": 12,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
      },
      paint: {
        "text-color": "#f2f0e9",
      },
    });
  });

  map.loadImage("/assets/favicon.png", (error, image) => {
    if (error) return;
    map.addImage("Main", image);

    const main = [
      locations.find((location) => {
        return location.category === "Main";
      }),
    ];

    map.addSource("main", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: createFeatures(main),
      },
    });

    map.addLayer({
      id: "main",
      source: "main",
      type: "symbol",
      layout: {
        "icon-image": "Main",
        "icon-size": 0.6,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
      },
    });
  });
});

const filterLocations = (type) => {
  unhighlightItem();
  const _locations = locations.filter((location) => {
    return location.category === type;
  });
  map.getSource("locations").setData({
    type: "FeatureCollection",
    features: createFeatures(_locations),
  });
  map.getSource("locations-number").setData({
    type: "FeatureCollection",
    features: createFeatures(_locations),
  });
  document.querySelectorAll(".map-button").forEach((button) => {
    button.classList.remove("map-button-active");
  });
  document
    .getElementById(`${type.toLowerCase()}-map-button`)
    .classList.add("map-button-active");

  renderMapItems(_locations);

  adjustMapBoundsToFeatures(map, "locations");

  document.querySelectorAll(".map-button-container").forEach((item) => {
    item.classList.remove("active");
  });
};

function adjustMapBoundsToFeatures(map, sourceId) {
  const sourceData = map.getSource(sourceId)._data;

  if (!sourceData || !sourceData.features.length) {
    console.log("No features to adjust bounds to.");
    return;
  }

  let bounds = new mapboxgl.LngLatBounds();

  sourceData.features.forEach((feature) => {
    const coords = feature.geometry.coordinates;

    bounds.extend(coords);
  });

  map.fitBounds(bounds, {
    duration: 1000,
    padding: 100,
  });
}

const createFeatures = (locations, label) => {
  return locations.map((location, id) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [location.lon, location.lat],
      },
      properties: {
        label: label ? label.toString() : `${id + 1}`,
        name: location.name,
        category: location.category,
      },
    };
  });
};

const highlightItem = (id, label) => {
  const highlighted = map.getSource("location-highlighted");
  const text = map.getSource("location-highlighted-number");

  if (!highlighted || !text) return;
  else {
    const location = locations.find((loc) => loc.name === id);
    if (!location) return;
    else {
      map.getSource("location-highlighted").setData({
        type: "FeatureCollection",
        features: createFeatures([location], label),
      });
      map.getSource("location-highlighted-number").setData({
        type: "FeatureCollection",
        features: createFeatures([location], label),
      });
      const popup = document.getElementById("map-popup");
      const title = document.getElementById("map-popup-title");
      const address = document.getElementById("map-popup-address");
      const url = document.getElementById("map-popup-url");

      popup.style.display = "block";
      title.textContent = location.name;
      address.textContent = location.address;
      url.href = `https://www.google.com/maps?q=${location.lat},${location.lon}`;

      map.fitBounds(
        new mapboxgl.LngLatBounds(
          [location.lon, location.lat],
          [location.lon, location.lat]
        ),
        {
          maxZoom: 14.5,
        }
      );
    }
  }

  document.querySelectorAll(".map-button-container").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelectorAll(".map-button-container")
    [label - 1].classList.add("active");
};

const unhighlightItem = () => {
  document.getElementById("map-popup").style.display = "none";
  map.getSource("location-highlighted").setData({
    type: "FeatureCollection",
    features: [],
  });
  map.getSource("location-highlighted-number").setData({
    type: "FeatureCollection",
    features: [],
  });
};
