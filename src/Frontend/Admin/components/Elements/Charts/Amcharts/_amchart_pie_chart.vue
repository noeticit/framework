<template>
    <div ref="amchart_pie_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);

    export default {
        name: "amchart-pie-chart",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: ''
            }
        },
        mounted() {
            let chart = am4core.create(this.$refs.amchart_pie_chart, am4charts.PieChart);

            chart.data = this.chartData.data;

            // Add and configure Series

            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "label";
            pieSeries.ticks.template.disabled = true;
            pieSeries.labels.template.disabled = true;

            if(this.chartData.legends)
            {
                chart.legend = new am4charts.Legend();
                if(this.chartData.legendsRight)
                    chart.legend.position = "right";
                chart.legend.labels.template.maxWidth = 120;
                chart.legend.labels.template.truncate = true;
                chart.legend.itemContainers.template.tooltipText = "{category}";
            }

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
