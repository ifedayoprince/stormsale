import { ChartData, ChartOptions } from "chart.js";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts/core'

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [5000, 15000, 20000, 25000, 30000, 45000, 40000, 35000, 30000, 25000, 20000, 15000],

};

const option = {
    tooltip: {
        position: 'top',
        formatter: function (params: any) {
            return `<div>$${params.value}</div>`;
        },
    },
    xAxis: {
        type: 'category',
        data: data.labels,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dotted',
                width: 2
            }
        },
    },
    grid: {
        left: 50,
        right: 0,
        top: 20,
        bottom: 20,
    },
    series: [
        {
            name: 'Sales Trends',
            type: 'bar',
            data: data.sales,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#07dfb1',
                    },
                    {
                        offset: 1,
                        color: '#20f08b',
                    },
                ]),
                barBorderRadius: [20, 20, 0, 0],
                opacity: 0.2,
                emphasis: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#07dfb1',
                        },
                        {
                            offset: 1,
                            color: '#20f08b00',
                        },
                    ]),
                }
            },
        },
    ],
};

export const SalesChart = () => {
    return (
        <EChartsReact option={option} className="w-ful" style={{ width: "100%", height: "100%" }} />
    )
}