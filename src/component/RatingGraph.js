import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// Themes begin
am4core.useTheme(am4themes_animated);

   
class RatingGraph extends Component {
  
  componentDidMount() {
    function am4themes_mossawirTheme(target) {
        if (target instanceof am4core.ColorSet) {
          target.list = [
            am4core.color("#0f47eb"),
            am4core.color("#3f5efb"),
            am4core.color("#0f47eb"),
            am4core.color("#2275f5"),
            am4core.color("#0f47eb"),
            am4core.color("#2275f5")
          ];
        }
      }
      am4core.useTheme(am4themes_mossawirTheme);

	var chart = am4core.create("chartdiv", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);



// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "category";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.innerRadius = 10;
pieSeries.slices.template.fillOpacity = 0.5;

pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";


// Add data
pieSeries.data = [{
  "category": "First + Second",
  "value": 60
}, {
  "category": "Unused",
  "value": 30,
  "labelDisabled":true
}];

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 1;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "value";
pieSeries2.dataFields.category = "category";
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
pieSeries2.slices.template.propertyFields.fill = "fill";

// Add data
pieSeries2.data = [{
  "category": "First",
  "value": 30
}, {
  "category": "Second",
  "value": 30
}, {
  "category": "Remaining",
  "value": 30,
  "fill":"#ccc"
}];


pieSeries.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(40);
})

pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(60);
})

pieSeries.adapter.add("radius", function(innerRadius, target){
  return am4core.percent(100);
})

pieSeries2.adapter.add("radius", function(innerRadius, target){
  return am4core.percent(80);
})

     this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
		<div>
		<div className="col-md-6">
                    <div className="genericDashboardBox2">
                        <h3 className="dashHeading2">Satisfaction Ratings <a href={() => false}><i className="far fa-question-circle"></i></a></h3>
                    <div className="chartWrap">
                         <div id="chartdiv">
                           
                         </div>
                        </div>  
                </div>
            </div>
            
		  </div>
			 
      
    );
  }
}

export default RatingGraph;