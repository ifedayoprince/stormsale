import { ReactNode } from "react";
import { PercentChip } from "./PercentChip";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts/core'

export interface StatCardProps {
    name: string;
    icon: ReactNode,
    data: number[],
    prefix?: string;
}

let data = [
    [0, 0],
    [10, 10],
    [20, 5],
    [30, 15],
    [40, 10],
    [50, 20],
    [60, 5],
    [70, 15],
    [80, 10]] 

const option = {
    xAxis: {
      splitLine: null
    },
    yAxis: {
      splitLine: null
    },
    grid: {
     left: -5,
     bottom: 0,
     top: 0,
     right: 0
    },
    series: [{
      data,
      type: 'line',
      lineStyle: {
        color: 'green',
        width: 1,
      },
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#05f961',
          },
          {
            offset: 1,
            color: '#05f96109',
          },
        ]),
      },
    }],
  };

export const StatCard: React.FC<StatCardProps> = ({ name, data, icon, prefix }) => {
    const index = data.findLastIndex((pos) => pos > 0)
    const currentMonth = data[index] || 0
    const previousMonth = data[(index - 1) || 0]
    const percentage = (currentMonth / previousMonth)

    console.log(`[statcard](${name.toLowerCase()}) ${data}`)
    let outputPercent = parseFloat(((currentMonth > previousMonth)
        ? percentage * 100
        : (1 - percentage) * -100).toFixed(1))

    if (Number.isNaN(percentage)) outputPercent = 0
    return (
        <div className="card p-3 flex gap-3 w-full max-w-72 bg-white">
            <div className="flex justify-between w-full items-center">
                <div className="p-2 rounded-full border w-min">
                    {icon}
                </div>
                <div className="h-14 w-28">
                    <EChartsReact style={{height: "100%", width: "100%"}} option={option}/>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-medium text-neutral-500">{name}</h3>
                <h1 className="font-semibold text-2xl">{prefix || ""}{currentMonth}</h1>
            </div>

            <div className="flex justify-between items-center gap-2">
                <PercentChip
                    trend={currentMonth > previousMonth
                        ? "up"
                        : "down"
                    }
                    value={outputPercent}
                />
                <p className="text-neutral-500 text-xs">vs. previous month</p>
            </div>
        </div>
    )
}