<template>
    <div ref="amchart_multiple_value_axes"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    export default {
        name: "amchart_multiple_value_axes",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: ''
            }
        },
        mounted() {

            //Loading themes
            if(this.chartData.theme)
            {
                    am4core.useTheme(am4themes_animated);
                    switch (this.chartData.theme) {
                        case 'dataviz':
                            am4core.useTheme(am4themes_dataviz);
                            break;
                        case '':
                            break;
                        default:

                    }
                }

                //Creating charts
            let chart = am4core.create(this.$refs.amchart_multiple_value_axes, am4charts.XYChart);
            chart.data = this.chartData.data;


                // Create category axis
                var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "year";
                categoryAxis.renderer.opposite = true;

                // Create value axis
                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.renderer.inversed = true;
                valueAxis.title.text = "Population Growth Rate (per cent)";
                valueAxis.renderer.minLabelPosition = 0.01;

                // Create series
                var series1 = chart.series.push(new am4charts.LineSeries());
                series1.dataFields.valueY = "india";
                series1.dataFields.categoryX = "year";
                series1.name = "India";
                series1.strokeWidth = 3;
                series1.bullets.push(new am4charts.CircleBullet());
                series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
                series1.legendSettings.valueText = "{valueY}";
                // series1.visible  = false;

                var series2 = chart.series.push(new am4charts.LineSeries());
                series2.dataFields.valueY = "maharashtra";
                series2.dataFields.categoryX = "year";
                series2.name = 'Maharashtra';
                series2.strokeWidth = 3;
                series2.bullets.push(new am4charts.CircleBullet());
                series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
                series2.legendSettings.valueText = "{valueY}";

                // var series3 = chart.series.push(new am4charts.LineSeries());
                // series3.dataFields.valueY = "uk";
                // series3.dataFields.categoryX = "year";
                // series3.name = 'United Kingdom';
                // series3.strokeWidth = 3;
                // series3.bullets.push(new am4charts.CircleBullet());
                // series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
                // series3.legendSettings.valueText = "{valueY}";

                // Add chart cursor
                chart.cursor = new am4charts.XYCursor();
                chart.cursor.behavior = "zoomY";

                // Add legend
                chart.legend = new am4charts.Legend();

                this.chart = chart;

                //Un-loading theme
                if(this.chartData.theme)
                {
                    am4core.unuseTheme(am4themes_animated);
                    switch (this.chartData.theme) {
                        case 'dataviz':
                            am4core.unuseTheme(am4themes_dataviz);
                            break;
                        case '':
                            break;
                        default:

                    }
                }
        },

        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose();
            }
        }
    }
</script>

<style scoped>

</style>
