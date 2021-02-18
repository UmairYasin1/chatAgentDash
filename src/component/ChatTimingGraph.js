import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class ChatTimingGraph extends Component {

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

	var chart = am4core.create("chartdiv2", am4charts.XYChart);

// Add data
chart.data = [{
  "year": 2005,
  "income": 23.5,
  "expenses": 18.1
},{
  "year": 2006,
  "income": 26.2,
  "expenses": 22.8
},{
  "year": 2007,
  "income": 30.1,
  "expenses": 23.9
},{
  "year": 2008,
  "income": 29.5,
  "expenses": 25.1
},{
  "year": 2009,
  "income": 24.6,
  "expenses": 25
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "year";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;

  var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
  categoryLabel.label.text = "{name}";
  categoryLabel.label.horizontalCenter = "right";
  categoryLabel.label.dx = -10;
  categoryLabel.label.fill = am4core.color("#fff");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

createSeries("income", "Income");
createSeries("expenses", "Expenses");


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
                        <h3 className="dashHeading2">Chat Timings <a href={() => false}><i className="far fa-question-circle"></i></a></h3>
                    <div className="chartWrap">
                         <div id="chartdiv2"></div>
                        </div>
                </div>
            </div>
		  </div>
			 
      
    );
  }
}

export default ChatTimingGraph;