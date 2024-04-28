import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#81aae6', '#436ca8', '#294b7d', '#24303F'],
  labels: ['Open space', 'Red Bull', 'Red Bull sugar-free', 'Misc.'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 20, 10, 5],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 20, 10, 5],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 col-span-7 rounded-xl border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <div className="mb-2 mt-6">
        <div id="chartThree" className="grid grid-cols-5 mx-auto flex justify-left">
          <div className="col-span-3 flex items-center">
            <ReactApexChart
              options={options}
              series={state.series}
              type="donut"
            />
          </div>
          <div className="col-span-2 flex flex-col align-center">
            <div className="justify-left">
              <h1 className="text-6xl mt-16 font-semibold text-black dark:text-white">65%</h1>
              <p className="mt-1 text-lg">space available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full mt-6 px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#81aae6]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Open space </span>
              <span> 65% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#436ca8]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Red Bull </span>
              <span> 20% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#294b7d]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Red Bull sugar-free </span>
              <span> 10% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#24303F]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Misc. </span>
              <span> 5% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
