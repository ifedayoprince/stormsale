import { ChartData, ChartOptions } from "chart.js";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts/core'
import { formatThousand } from "../utils/format";

import OrderData from '@/app/_data/orders.json';
import { listByMonth, toOrderArray } from "../_models/Order";

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [5000, 15000, 20000, 25000, 30000, 45000, 40000, 35000, 30000, 25000, 20000, 15000],

};

const option = {
    tooltip: {
        position: 'top',
        className: "!bg-[#090C2C] !px-3 !py-2 !border-none !text-white chart-tip",
        formatter: function (params: any) {
            return `<div>$${formatThousand(params.value)}</div>`;
        },
    },
    xAxis: {
        type: 'category',
        data: data.labels,
        axisLabel: {
            color: "#b2abab"
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: "#b2abab"
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                width: 2,
                color: "#a3a3a3"
            }
        },
    },
    grid: {
        left: 40,
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
                color: "#34CAA51A",
                barBorderRadius: [20, 20, 0, 0],
                emphasis: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#34CAA5',
                        },
                        {
                            offset: 1,
                            color: '#34CAA500',
                        },
                    ]),
                }
            },
        },
    ],
};

export const SalesChart = () => {
    let data = listByMonth(toOrderArray(OrderData));
    let sales = data.map((month) => month.length == 0
        ? 0
        : month.reduce((a, b) => ({ ...a, amount: a.amount + b.amount })).amount)
    option.series[0].data = sales;

    return (
        <EChartsReact option={option} className="w-full" style={{ width: "100%", height: "100%" }} />
    )
}