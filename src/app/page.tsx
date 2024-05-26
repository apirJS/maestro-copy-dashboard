'use client';

import PieChart from './_components/PieChart';
import BarChartPemasukan from './_components/BarChartPemasukan';
import { Chart, ArcElement, Legend, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement);
Chart.register(Legend);
Chart.register(Tooltip);
Chart.register(ChartDataLabels);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

export default function Home() {
  return (
    <main className='grid grid-cols-[2fr,1fr] p-5 gap-x-5'>
      <section className='grid grid-cols-1 gap-y-5 justify-start'>
        <div className='bg-primary'></div>
        <div className='bg-primary'></div>
      </section>
      <section className='grid grid-cols-1 grid-rows-[1fr,1fr,1fr,3fr] gap-y-5'>
        <div className='bg-primary'></div>
        <div className='bg-primary'></div>
        <div className='bg-primary'></div>
        <div className=''></div>
      </section>
    </main>
  );
}
