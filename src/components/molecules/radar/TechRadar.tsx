import { memo, VFC } from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const options: object = {
  plugins: {
    legend: false,
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    r: {
      min: 0,
      max: 5,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      ticks: {
        display: false,
        count: 6,
      },
      grid: {
        color: "#ffffff",
        lineWidth: "3",
      },
      angleLines: {
        color: "#ffffff",
        lineWidth: "3",
      },
      pointLabels: {
        color: "#ffffff",
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
  },
};
type Props = {
  radar: number[];
};

export const TechRadar: VFC<Props> = memo(({ radar }) => {
  return (
    <Radar
      data={{
        labels: [
          "バズり度",
          "破壊度",
          "スキンシップ度",
          "ストレッチ度",
          "謎度",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: radar,
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: "rgba(255, 0, 255, 0.8)",
            borderColor: "rgba(255, 0, 255, 1)",
            borderWidth: 1,
            borderCapStyle: "round",
            borderJoinStyle: "round",
            spanGaps: true,
          },
        ],
      }}
      options={options}
    />
  );
});
