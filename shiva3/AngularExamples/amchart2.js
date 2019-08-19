var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "newStack": true,
    "valueAxes": [{
      "id": "v1",
      "title": "Sales",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function(value) {
        return "$" + Math.round(value) + "M";
      }
    }, {
      "id": "v2",
      "title": "Market Days",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#e1ede9",
      "fillColors": "#e1ede9",
      "fillAlphas": 1,
      "type": "column",
      "title": "Actual Sales",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#62cf73",
      "fillColors": "#62cf73",
      "fillAlphas": 1,
      "type": "column",
      "title": "Target Sales",
      "labelText": "[[value]]% \u21EA",
      "labelOffset": 20,
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": " ",
      "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
    }],
    "depth3D": 10,
    "angle": 30,
    "chartScrollbar": {
      "graph": "g1",
      "oppositeAxis": false,
      "offset": 30,
      "scrollbarHeight": 50,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#AAAAAA"
    },
    "chartCursor": {
      "pan": true,
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "valueLineAlpha": 0.2
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": false
    },
    "legend": {
      "useGraphSettings": true,
      "position": "top"
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
      "enabled": true
    },
    "dataProvider": [{
      "date": "2013-01-16",
      "market1": 71,
      "market2": 75,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-17",
      "market1": 74,
      "market2": 78,
      "sales1": 4,
      "sales2": 6
    }, {
      "date": "2013-01-18",
      "market1": 78,
      "market2": 88,
      "sales1": 5,
      "sales2": 2
    }, {
      "date": "2013-01-19",
      "market1": 85,
      "market2": 89,
      "sales1": 8,
      "sales2": 9
    }, {
      "date": "2013-01-20",
      "market1": 82,
      "market2": 89,
      "sales1": 9,
      "sales2": 6
    }, {
      "date": "2013-01-21",
      "market1": 83,
      "market2": 85,
      "sales1": 3,
      "sales2": 5
    }],
    "addClassNames": true,
    "listeners": [{
      "event": "drawn",
      "method": function(e) {
        Array.prototype.forEach.call(
          document.querySelectorAll(".amcharts-graph-g4 .amcharts-graph-label"),
          function(graphLabel) {
            var transform = parseTransform(graphLabel.getAttribute('transform'));
            transform.translate[0] = parseFloat(transform.translate[0]) + 5; //adjust X offset
            graphLabel.setAttribute('transform', serializeTransform(transform));
        });
      }
    }]
  });
  
  // from http://stackoverflow.com/questions/17824145/parse-svg-transform-attribute-with-javascript
  function parseTransform(a) {
    var b = {};
    for (var i in a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g)) {
      var c = a[i].match(/[\w\.\-]+/g);
      b[c.shift()] = c;
    }
    return b;
  }
  
  //serialize transform object back to an attribute string
  function serializeTransform(transformObj) {
    var transformStrings = [];
    for (var attr in transformObj) {
      transformStrings.push(attr + '(' + transformObj[attr].join(',') + ')');
    }
    return transformStrings.join(',');
  }
  