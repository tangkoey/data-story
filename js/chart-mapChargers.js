am4core.useTheme(am4themes_animated);

var map = am4core.createFromConfig({

    "geodata": am4geodata_hongKongHigh,
    "projection": "Mercator",
    "series": [{
        "type": "MapPolygonSeries",
        "useGeodata": true,
        "data": [{
            id: "HK-YT",
            value: 256,
            st: 69,
            mid: 120,
            qu: 67
        }, {
            id: "HK-YL",
            value: 107,
            st: 56,
            mid: 33,
            qu: 18
        }, {
            id: "HK-WT",
            value: 84,
            st: 24,
            mid: 48,
            qu: 12
        }, {
            id: "HK-WC",
            value: 221,
            st: 66,
            mid: 118,
            qu: 37
        }, {
            id: "HK-TW",
            value: 237,
            st: 18,
            mid: 182,
            qu: 37
        }, {
            id: "HK-TP",
            value: 39,
            st: 28,
            mid: 6,
            qu: 5
        }, {
            id: "HK-TM",
            value: 51,
            st: 12,
            mid: 19,
            qu: 20
        }, {
            id: "HK-ST",
            value: 189,
            st: 72,
            mid: 67,
            qu: 50
        }, {
            id: "HK-SS",
            value: 232,
            st: 35,
            mid: 123,
            qu: 37
        }, {
            id: "HK-SO",
            value: 55,
            st: 4,
            mid: 17,
            qu: 34
        }, {
            id: "HK-SK",
            value: 109,
            st: 24,
            mid: 52,
            qu: 33
        }, {
            id: "HK-NO",
            value: 113,
            st: 73,
            mid: 28,
            qu: 12
        }, {
            id: "HK-KU",
            value: 827,
            st: 554,
            mid: 208,
            qu: 65
        }, {
            id: "HK-KI",
            value: 75,
            st: 21,
            mid: 20,
            qu: 34
        }, {
            id: "HK-KC",
            value: 114,
            st: 66,
            mid: 30,
            qu: 18
        }, {
            id: "HK-IS",
            value: 187,
            st: 42,
            mid: 116,
            qu: 29
        }, {
            id: "HK-EA",
            value: 191,
            st: 25,
            mid: 110,
            qu: 56
        }, {
            id: "HK-CW",
            value: 264,
            st: 63,
            mid: 159,
            qu: 42
        }],
        "mapPolygons": {
            "tooltipText": "{name}: \n Total: {value} Chargers \n Standard: {st} \n Middle-speed: {mid} \n Fast: {qu} ",
            "states": {
                "hover": {
                    "properties": {
                        "fill": "#FFDD81"
                    }
                }
            }
        },
        "heatRules": [{
            "target": "mapPolygons.template",
            "property": "fill",
            "min": "#000066",
            "max": "#FFDD81",
            "dataField": "value"
        }]
    }],
    "titles": [{
        "text": "Number of EV chargers by District \n Total: 3351 \n Standard: 1221 \n Middle-speed: 1456 \n Fast: 643",
        // "fontFamily": "Georgia",
        // "fontSize": 25,
        "fill": "#7099FF",
        "align": "left",
        // "paddingTop": 50,
        // "paddingLeft": 100,
    }],
    // "paddingTop": 50,
    // "paddingBottom": 50,

}, "chartdiv", am4maps.MapChart);