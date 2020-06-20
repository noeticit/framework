<template>
    <div ref="amchart_line_chart"></div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

    export default {
        name: "amchart_line_chart",
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
            let chart = am4core.create(this.$refs.amchart_line_chart, am4charts.XYChart);
            chart.data = this.chartData.data;

            // chart.data = this.chartData.data.map(a => ({
            //     label: a.label,
            //     value: a.value,
            //     color: chart.colors.next()
            // }))

            // Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.minGridDistance = 30;
            dateAxis.title.text = "Years ";
            // dateAxis.renderer.inversed = true;
            dateAxis.renderer.grid.template.disabled = true;

            // Create value axis
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            let lineSeries = chart.series.push(new am4charts.LineSeries());
            lineSeries.dataFields.valueY = "value";
            lineSeries.dataFields.dateX = "year";
            lineSeries.name = "Sales";
            lineSeries.strokeWidth = 2;

            // lineSeries.columns.template.tooltipText = "{dateX}: [bold]{valueY}[-]";
            // lineSeries.columns.template.fillOpacity = .8;

            // Add simple bullet circle
            let circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
            circleBullet.circle.stroke = am4core.color("#fff");
            circleBullet.circle.strokeWidth = 1;
            circleBullet.tooltipText = "Value: [bold]{value}[/]";

            let labelBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
            labelBullet.label.text = "{value}";
            labelBullet.label.dx = -15;
            labelBullet.label.dy = -15;

            // let bullet = lineSeries.bullets.push(new am4charts.Bullet());
            // let image = bullet.createChild(am4core.Image);
            // image.href = "https://www.amcharts.com/lib/images/star.svg";
            // image.width = 10;
            // image.height = 10;
            // image.horizontalCenter = "middle";
            // image.verticalCenter = "middle";

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
