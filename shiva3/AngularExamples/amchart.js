var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "addClassNames": true,
    "titles": [{
        "text": " amChart Example"
    }],
    "dataProvider": [{
      "name": "VLCC",
      "value": 7735,
      "color": "#6C6896"
    }, {
      "name": "Suezmax",
      "value": 5715,
      "color": "#FF0062"
    }, {
      "name": "Aframax",
      "value": 2435,
      "color": "#FF9400"
    }, {
      "name": "Panamax",
      "value": 2415,
      "color": "#00D469"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "labelsEnabled": false
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]]</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "value",
      "labelText": "[[value]]",
      "labelPosition": "middle",
      "fontSize": 12,
      "color": "#FFFFFF"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "name",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 0,
      "boldLabels": "bold"
    },
    "allLabels": [{
      "id": "xx",
      "text": "View data",
      "bold": true,
      "x": "90%",
      "y": "3%",
      "rotation": 0,
      "width": "100%",
      "size": 11,
      "align": "middle",
      "url": "http://google.com" 
    }]
  });