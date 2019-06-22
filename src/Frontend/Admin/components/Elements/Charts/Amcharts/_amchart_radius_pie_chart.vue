<template>
    <div ref="amchart_radius_pie_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    // import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    // am4core.useTheme(am4themes_dataviz);
    // am4core.useTheme(am4themes_animated);

    export default {
        name: "amchart-radius-pie-chart",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: ''
            }
        },
        mounted() {

            let chart = am4core.create(this.$refs.amchart_radius_pie_chart, am4charts.PieChart);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            chart.data = this.chartData.data;

            // Add and configure Series

            let series = chart.series.push(new am4charts.PieSeries());
            series.dataFields.value = "value";
            series.dataFields.radiusValue = "value";
            series.dataFields.category = "label";
            series.slices.template.cornerRadius = 6;
            series.colors.step = 3;

            series.hiddenState.properties.endAngle = -90;

            if(this.chartData.legends)
                chart.legend = new am4charts.Legend();

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
