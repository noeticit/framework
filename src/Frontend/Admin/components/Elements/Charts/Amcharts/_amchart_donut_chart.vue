<template>
    <div ref="amchart_donut_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    // am4core.useTheme(am4themes_dataviz);
    // am4core.useTheme(am4themes_animated);

    export default {
        name: "amchart-donut-chart",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: ''
            }
        },
        mounted() {
            let chart = am4core.create(this.$refs.amchart_donut_chart, am4charts.PieChart);

            chart.data = this.chartData.data;

            // Set inner radius
            chart.innerRadius = am4core.percent(50);

            // Add and configure Series
            let pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "label";
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;

            // This creates initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;
            this.chart = chart;
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
