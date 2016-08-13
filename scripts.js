

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0aW5heWdsZXNpYXMiLCJhIjoiY2luaTd5ZHQyMHd0Z3Uya2psZ2gwcGhhdyJ9.Oo0GSgShg1X-27jueTaLKA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-122.199934, 37.825816],
    zoom: 12.3,
});

map.on('load', function () {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "description": "<div class=\"marker-title\">Curbside Creamery</div><p> <a href=\"http://curbsideoakland.com/\" target=\"_blank\" title=\"Opens in a new window\">Curbside Creamery</a> is a gourmet ice cream shop in the uber-hipster Temescal Alley that features classic flavors, ice cream sandwiches, and vegan options. </p>",
           "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.26198, 37.83602]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Tara's Organic Ice Cream</div><p><a href=\"http://www.tarasorganic.com/\" target=\"_blank\" title=\"Opens in a new window\">Tara's Organic Ice Cream</a> is a small shop serving up adventurous, constantly rotating flavors </p>",
           "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.26323, 37.83483]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Lush Gelato</div><p> <a href=\"http://lushgelato.com/\" target=\"_blank\" title=\"Opens in a new window\">Lush Gelato</a> is a small gourmet spot that combines the texture of gelato with non-traditional flavors like Brown Sugar Rum and Marscapone Balsamic.</p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.25123, 37.82702]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Fenton's Creamery</div><p> <a href=\"http://fentonscreamery.com/\" target=\"_blank\" title=\"Opens in a new window\">Fenton's Creamery</a> is a retro diner and ice cream parlor that has been serving up classic flavors and sharable sundaes since 1894. </p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.25002, 37.82795]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Nieves Cinco de Mayo</div><p><a href=\"http://nievescincodemayo.com/\" target=\"_blank\" title=\"Opens in a new window\">Nieves Cinco de Mayo</a> is a counter-only shop in the Fruitvale Village that serves artisan Nieves de garrafa, a Mexican water-based sorbet. You probably won't be able to find all-natural mole, hibiscus, or elote flavors anywhere else.  </p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates":  [-122.22405, 37.7763]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Gelato Firenze</div><p> <a href=\"http://www.chowhound.com/post/bayareagelato-firenze-oakland-442143\" target=\"_blank\" title=\"Opens in a new window\">Gelato Firenze</a> is a small unassuming shop with classic Gelato right around the corner from the Grand Lake Theater.</p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [ -122.24727, 37.81105]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Loard's Ice Cream</div><p><a href=\"http://www.loards.com/\" target=\"_blank\" title=\"Opens in a new window\">Loard's Ice Cream</a> is a nostalgic parlor that has been serving up classic and seasonal flavors since 1950.</p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.20779, 37.79847]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Flavor Brigade</div><p><a href=\"http://flavorbrigade.com/\" target=\"_blank\" title=\"Opens in a new window\">Flavor Brigade</a> is a neighbhorhood shop offering Italian Water Ice, frozen custard, chocolate-covered bananas, and organic ice cream.",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.21564, 37.80101]
        }
    }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Little Giant Ice Cream</div><p><a href=\"http://littlegianticecream.com\" target=\"_blank\">Little Giant Ice Cream</a> is a hip uptown establishment feauturing gourmet flavors like honey goatcheese and vegan matcha.</p>",
           "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.26989, 37.8093]
        }
        }, {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">Smitten Ice Cream</div><p><a href=\"http://www.smittenicecream.com/\" target=\"_blank\">Smitten Ice Cream</a> creates your scoop from fresh ingredients right in front of you using liquid nitrogen.</p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.25173, 37.84616]
        }
        }, 
        {
        "type": "Feature",
        "properties": {
            "description": "<div class=\"marker-title\">CREAM</div><p><a href=\"http://creamnation.com/\" target=\"_blank\">CREAM</a> serves up ingulgent ice cream cookie sandwiches with plenty of cookie options and ice-cream flavors to choose from.</p>",
            "marker-symbol": "ice-cream"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.25215, 37.84998]
            }
            }
        ]
}
    });

    // Add a layer showing the markers.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": "places",
        "layout": {
            "icon-image": "{marker-symbol}-15",
            "icon-allow-overlap": true
        }
    });

});

// When a click event occurs near a marker icon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });

    if (!features.length) {
        return;
    }

    var feature = features[0];
    var panelElement= document.getElementById("panel");
    panelElement.innerHTML=feature.properties.description;
      map.flyTo({
        center: feature.geometry.coordinates
    });
    
//    feature.properties.description

    // Populate the popup and set its coordinates
    // based on the feature found.
//    var popup = new mapboxgl.Popup()
//        .setLngLat(feature.geometry.coordinates)
//        .setHTML(feature.properties.description)
//        .addTo(map);
});

//// Use the same approach as above to indicate that the symbols are clickable
//// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['places'] });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});