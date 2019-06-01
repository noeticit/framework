<template>
    <div ref="amchart_bar_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);

    export default {
        name: "amchart_bar_chart",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: ''
            }
        },
        mounted() {
            let chart = am4core.create(this.$refs.amchart_bar_chart, am4charts.XYChart3D);

            chart.data = this.chartData.data.map(a => ({
                label: a.label,
                value: a.value,
                color: chart.colors.next()
            }))

            // Create axes
            var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "label";
            categoryAxis.numberFormatter.numberFormat = "#";
            categoryAxis.renderer.inversed = true;

            var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries3D());
            series.dataFields.valueX = "value";
            series.dataFields.categoryY = "label";
            series.columns.template.propertyFields.fill = "color";
            series.columns.template.tooltipText = "{valueX}";
            series.columns.template.column3D.stroke = am4core.color("#fff");
            series.columns.template.column3D.strokeOpacity = 0.2;

            this.chart = chart;
        }
    }
</script>

<style scoped>

</style>
