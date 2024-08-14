mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVvc3R1ZGlvIiwiYSI6ImNsbHI0dzNlZzBpeGcza28wN3poZ2kyaDkifQ.8jcIDMyngTd6XLhNt5jOEA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [-73.95712442597477, 40.74370218408596],
  zoom: window.innerWidth > 1024 ? 14.5 : 14.5,
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
var locations = [
  {
    category: "Main",
    name: "Jasper Hunter's Point",
    lat: 40.74370218408596,
    lon: -73.95712442597477,
    address: "2-33 50th Ave Long Island City, NY 11101",
  },
  {
    category: "Transportation",
    name: "7 Train",
    lat: 40.742635087783526,
    lon: -73.95343783638813,
    address: "Vernon Blvd-Jackson Ave Subway Station",
  },
  {
    category: "Transportation",
    name: "G Train",
    lat: 40.74482606213994,
    lon: -73.94866302568443,
    address: "21 St Subway Station",
  },
  {
    category: "Transportation",
    name: "LIRR",
    lat: 40.74152885201523,
    lon: -73.95706325955142,
    address: "Long Island City Train Station",
  },
  {
    category: "Transportation",
    name: "Hunters Point South Ferry Terminal",
    lat: 40.741853924401894,
    lon: -73.96135298079152,
    address: "54th Ave on, 2nd St, Long Island City, NY 11101",
  },
  {
    category: "Transportation",
    name: "Q103",
    lat: 40.74327577461642,
    lon: -73.95404078426768,
    address: "Vernon Blvd/49 Av Bus Stop",
  },
  {
    category: "Recreation",
    name: "Gantry Plaza State Park",
    lat: 40.74680971114136,
    lon: -73.95819811194761,
    address: "4-44 47th Rd, Queens, NY 11101",
  },
  {
    category: "Recreation",
    name: "Hunter's Point South Park",
    lat: 40.74231459902528,
    lon: -73.96068745108442,
    address: "Center Blvd, Long Island City, NY 11101",
  },
  {
    category: "Recreation",
    name: "Movement LIC",
    lat: 40.74862079268467,
    lon: -73.94873646651317,
    address: "11-11 44th Dr, Long Island City, NY 11101",
  },
  {
    category: "Recreation",
    name: "Murray Playground",
    lat: 40.74709409801752,
    lon: -73.94826484448943,
    address: "45th Rd. & 21st St, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "Casa Enrique",
    lat: 40.74342652313709,
    lon: -73.95437437677592,
    address: "5-48 49th Ave, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "M. Wells",
    lat: 40.74839411595454,
    lon: -73.94234725869936,
    address: "43-15 Crescent St, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "MOGMOG",
    lat: 40.74236785173686,
    lon: -73.9552522605143,
    address: "5-35 51st Ave, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "Hupo",
    lat: 40.74274553338888,
    lon: -73.95363465897445,
    address: "10-07 50th Ave, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "JACX&CO Food Hall",
    lat: 40.74886754037759,
    lon: -73.9384478485219,
    address: "28-17 Jackson Ave, Queens, NY 11101",
  },
  {
    category: "Restaurant",
    name: "THE BARONESS",
    lat: 40.744951921628086,
    lon: -73.95352002915843,
    address: "47-18 Vernon Blvd, Queens, NY 11101",
  },
  {
    category: "Restaurant",
    name: "R40",
    lat: 40.74501724848977,
    lon: -73.95349682689553,
    address: "47-16 Vernon Blvd, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "Blend LIC",
    lat: 40.74529307314322,
    lon: -73.95341317665692,
    address: "47-04 Vernon Blvd, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "The Gutter Bar",
    lat: 40.7465974469539,
    lon: -73.95176720060184,
    address: "10-22 46th Ave, Long Island City, NY 11101",
  },
  {
    category: "Restaurant",
    name: "Fifth Hammer Brewing Company",
    lat: 40.74655572735968,
    lon: -73.95152591288192,
    address: "10-28 46th Ave, Long Island City, NY 11101",
  },
  {
    category: "Culture",
    name: "MoMA PS1",
    lat: 40.74560337939252,
    lon: -73.94709693504088,
    address: "22-25 Jackson Ave, Queens, NY 11101",
  },
  {
    category: "Culture",
    name: "The Noguchi Museum",
    lat: 40.76688331999456,
    lon: -73.93809614492972,
    address: "9-01 33rd Rd, Queens, NY 11106",
  },
  {
    category: "Culture",
    name: "SculptureCenter",
    lat: 40.74689640049233,
    lon: -73.94091273957537,
    address: "44-19 Purves St, Long Island City, NY 11101",
  },
  {
    category: "Culture",
    name: "Queens Public Library at Hunters Point",
    lat: 40.7453207040714,
    lon: -73.95806700610594,
    address: "47-40 Center Blvd, Queens, NY 11109",
  },
  {
    category: "Culture",
    name: "Pepsi Cola Sign",
    lat: 40.74757348621162,
    lon: -73.9575084008705,
    address: "4610 Center Blvd, Long Island City, NY 11109",
  },
  {
    category: "Culture",
    name: "Museum of the Moving Image",
    lat: 40.75634174438503,
    lon: -73.92395034637187,
    address: "36-01 35th Ave, Queens, NY 11106",
  },
  {
    category: "Culture",
    name: "Record Room",
    lat: 40.74583795348138,
    lon: -73.95671321654615,
    address: "4709 Center Blvd, Queens, NY 11109",
  },
  {
    category: "Culture",
    name: "Culture Lab LIC",
    lat: 40.74748006874506,
    lon: -73.95447967588393,
    address: "5-25 46th Ave, Long Island City, NY 11101",
  },
  {
    category: "Culture",
    name: "Museum Of Urban Arts",
    lat: 40.74550610796403,
    lon: -73.94607499770284,
    address: "22-44 Jackson Ave, Queens, NY 11101",
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

let categoryFilter = "";

const _locations = locations.filter(
  (location) =>
    location.category !== "Main" &&
    (!categoryFilter || location.category === categoryFilter)
);

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
