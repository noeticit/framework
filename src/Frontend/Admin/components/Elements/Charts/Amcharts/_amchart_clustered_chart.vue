<template>
    <div ref="amchart_clustered_chart"></div>
</template>

<script>

    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    export default {
        name: "amchart-clustered-chart",
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
            let chart = am4core.create(this.$refs.amchart_clustered_chart, am4charts.XYChart);
            chart.data = this.chartData.data;

            chart.colors.step = 2;
            chart.padding(30, 30, 10, 30);
            chart.legend = new am4charts.Legend();

            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "category";
            categoryAxis.renderer.grid.template.location = 0;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.max = 100;
            valueAxis.strictMinMax = true;
            valueAxis.calculateTotals = true;
            valueAxis.renderer.minWidth = 50;


            var series1 = chart.series.push(new am4charts.ColumnSeries());
            series1.columns.template.width = am4core.percent(80);
            series1.columns.template.tooltipText =
                "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
            series1.name = "Series 1";
            series1.dataFields.categoryX = "category";
            series1.dataFields.valueY = "value1";
            series1.dataFields.valueYShow = "totalPercent";
            series1.dataItems.template.locations.categoryX = 0.5;
            series1.stacked = true;
            series1.tooltip.pointerOrientation = "vertical";

            var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
            bullet1.interactionsEnabled = false;
            bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
            bullet1.label.fill = am4core.color("#ffffff");
            bullet1.locationY = 0.5;

            var series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.columns.template.width = am4core.percent(80);
            series2.columns.template.tooltipText =
                "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
            series2.name = "Series 2";
            series2.dataFields.categoryX = "category";
            series2.dataFields.valueY = "value2";
            series2.dataFields.valueYShow = "totalPercent";
            series2.dataItems.template.locations.categoryX = 0.5;
            series2.stacked = true;
            series2.tooltip.pointerOrientation = "vertical";

            var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
            bullet2.interactionsEnabled = false;
            bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
            bullet2.locationY = 0.5;
            bullet2.label.fill = am4core.color("#ffffff");

            var series3 = chart.series.push(new am4charts.ColumnSeries());
            series3.columns.template.width = am4core.percent(80);
            series3.columns.template.tooltipText =
                "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
            series3.name = "Series 3";
            series3.dataFields.categoryX = "category";
            series3.dataFields.valueY = "value3";
            series3.dataFields.valueYShow = "totalPercent";
            series3.dataItems.template.locations.categoryX = 0.5;
            series3.stacked = true;
            series3.tooltip.pointerOrientation = "vertical";

            var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
            bullet3.interactionsEnabled = false;
            bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
            bullet3.locationY = 0.5;
            bullet3.label.fill = am4core.color("#ffffff");

            chart.scrollbarX = new am4core.Scrollbar();

            // Add legend
            if(this.chartData.legends)
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
