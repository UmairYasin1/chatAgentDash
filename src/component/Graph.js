import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Graph = () =>  {

useEffect(() => {
  
	function am4themes_mossawirTheme(target) {
        if (target instanceof am4core.ColorSet) {
          target.list = [
            am4core.color("green"),
            am4core.color("#3f5efb"),
            am4core.color("#0f47eb"),
            am4core.color("#2275f5"),
            am4core.color("#0f47eb"),
            am4core.color("#2275f5")
          ];
        }
      }
      am4core.useTheme(am4themes_mossawirTheme);

	var chart = am4core.create("Graphcontainer", am4charts.XYChart);

	chart.scrollbarX = new am4core.Scrollbar();

// Add data
chart.data = [{
  "month": "January",
  "visits": 4000
}, {
  "month": "Febuary",
  "visits": 1882
}, {
  "month": "March",
  "visits": 1809
}, {
  "month": "April",
  "visits": 1322
}, {
  "month": "May",
  "visits": 1122
}, {
  "month": "June",
  "visits": 1114
}, {
  "month": "July",
  "visits": 984
}, {
  "month": "August",
  "visits": 711
}, {
  "month": "September",
  "visits": 665
}];

prepareParetoData();

function prepareParetoData(){
    var total = 0;

    for(var i = 0; i < chart.data.length; i++){
        var value = chart.data[i].visits;
        total += value;
    }

    var sum = 0;
    for(  i = 0; i < chart.data.length; i++){
         value = chart.data[i].visits;
        sum += value;   
        chart.data[i].pareto = sum / total * 100;
    }    
}

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "month";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.tooltip.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;

// Create series
// var series = chart.series.push(new am4charts.ColumnSeries());
// series.sequencedInterpolation = true;
// series.dataFields.valueY = "visits";
// series.dataFields.categoryX = "country";
// series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
// series.columns.template.strokeWidth = 0;

// series.tooltip.pointerOrientation = "vertical";

// series.columns.template.column.cornerRadiusTopLeft = 10;
// series.columns.template.column.cornerRadiusTopRight = 10;
// series.columns.template.column.fillOpacity = 0.8;

// // on hover, make corner radiuses bigger
// var hoverState = series.columns.template.column.states.create("hover");
// hoverState.properties.cornerRadiusTopLeft = 0;
// hoverState.properties.cornerRadiusTopRight = 0;
// hoverState.properties.fillOpacity = 1;

// series.columns.template.adapter.add("fill", function(fill, target) {
//   return chart.colors.getIndex(target.dataItem.index);
// })


var paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
paretoValueAxis.renderer.opposite = true;
paretoValueAxis.min = 0;
paretoValueAxis.max = 100;
paretoValueAxis.strictMinMax = true;
paretoValueAxis.renderer.grid.template.disabled = true;
paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
paretoValueAxis.numberFormatter.numberFormat = "#'%'"
paretoValueAxis.cursorTooltipEnabled = false;

var paretoSeries = chart.series.push(new am4charts.LineSeries())
paretoSeries.dataFields.valueY = "pareto";
paretoSeries.dataFields.categoryX = "month";
paretoSeries.yAxis = paretoValueAxis;
paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
paretoSeries.bullets.push(new am4charts.CircleBullet());
paretoSeries.strokeWidth = 2;
paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
paretoSeries.strokeOpacity = 0.5;

// Cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";

	
	
  
	
return () => {
			if (chart) { 
				chart.dispose();
			}
}
		},[]);
 

  
    return (
      
      <div className="chart">
      <div className="graphPlot">
        <div className="Graphcontainer" id="Graphcontainer"></div>
      </div>
  </div>
 
    );
  }


export default Graph;

