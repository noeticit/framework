<template>
    <div ref="amchart_3d_stacked_column_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    export default {
        name: "amchart_3d_stacked_column_chart",
        props: {
            chartData: Object,
        },
        data() {
            return {
                chart: '',
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
            let chart = am4core.create(this.$refs.amchart_3d_stacked_column_chart, am4charts.XYChart3D);
            chart.data = this.chartData.data;

            // chart.data = this.chartData.data.map(a => ({
            //     label: a.label,
            //     value: a.value,
            //     color: chart.colors.next()
            // }))


            // Create axes
            var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "year";
            categoryAxis.title.text = "Year";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = "Exports and Imports";
            valueAxis.renderer.labels.template.adapter.add("text", function(text) {
                return text ;
            });

            // Create series
            var series = chart.series.push(new am4charts.ColumnSeries3D());
            series.dataFields.valueY = "year2017";
            series.dataFields.categoryX = "year";
            series.name = "Year 2017";
            series.clustered = false;
            series.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
            series.columns.template.fillOpacity = 0.9;

            var series2 = chart.series.push(new am4charts.ColumnSeries3D());
            series2.dataFields.valueY = "year2018";
            series2.dataFields.categoryX = "year";
            series2.name = "Year 2018";
            series2.clustered = false;
            series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";

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
