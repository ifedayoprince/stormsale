import { ReactNode } from "react";
import { PercentChip } from "./PercentChip";
import EChartsReact from "echarts-for-react";
import * as echarts from 'echarts/core'
import { formatThousand } from "@/app/utils/format";

export interface StatCardProps {
  name: string;
  icon: ReactNode,
  data: number[],
  prefix?: string;
}


export const StatCard: React.FC<StatCardProps> = ({ name, data, icon, prefix }) => {
  const index = data.findLastIndex((pos) => pos > 0)
  const currentMonth = data[index] || 0
  const previousMonth = data[(index - 1) || 0]
  const percentage = (currentMonth / previousMonth)

  let outputPercent = parseFloat(((currentMonth > previousMonth)
    ? percentage * 100
    : (1 - percentage) * -100).toFixed(1))

  if (outputPercent < 0) outputPercent *= -1
  if (Number.isNaN(percentage)) outputPercent = 0

  let option;
  if (!(currentMonth > previousMonth)) {
    option = getEchartOptions('#ED544E', undefined, prepareData(data))
  } else {
    option = getEchartOptions("#77B900", "'##66C87B'", prepareData(data))
  }


  return (
    <div className="card p-3 flex gap-3 h-full w-full max-w-72 bg-white dark:bg-neutral-700 border border-border dark:border-neutral-600">
      <div className="flex justify-between w-full items-center gap-2">
        <div className="p-2 rounded-full border dark:border-neutral-300 w-min">
          {icon}
        </div>
        <PercentChip
          trend={currentMonth > previousMonth
            ? "up"
            : "down"
          }
          value={outputPercent}
          showMobile
        />
        <div className="h-10 w-20 hidden md:block">
          <EChartsReact style={{ height: "100%", width: "100%" }} option={option} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-neutral-500 dark:text-neutral-300">{name}</h3>
        <h1 className="font-semibold text-2xl dark:text-white">{prefix || ""}{formatThousand(currentMonth)}</h1>
      </div>

      <div className="justify-between items-center gap-2 hidden md:flex">
        <PercentChip
          trend={currentMonth > previousMonth
            ? "up"
            : "down"
          }
          value={outputPercent}
          hide
        />
        <p className="text-neutral-500 dark:text-neutral-300 text-xs hidden md:block line-clamp-1">vs. previous month</p>
      </div>
    </div>
  )
}

function getEchartOptions(color: string, border?: string, data?: number[][]) {
  return {
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
      data: data ? data : [],
      type: 'line',
      lineStyle: {
        color: border
          ? border
          : color,
        width: 1,
      },
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: color,
          },
          {
            offset: 1,
            color: `${color}00`,
          },
        ]),
      },
    }],
  };
}

export function prepareData(data: number[]): number[][] {
  let newData = [];
  let current = 0
  for(let month of data) {
    newData.push([current, month])
    current += 10
  }
  return newData;
}