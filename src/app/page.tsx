'use client';


import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Montserrat } from 'next/font/google';

Chart.register(ArcElement);
Chart.register(Legend);
Chart.register(Tooltip);
Chart.register(ChartDataLabels);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

const monsterrat = Montserrat({ subsets: ['latin']});

export default function Home() {
  return (
    <main className={`${monsterrat.className} grid grid-cols-[3fr,1.25fr] p-5 gap-x-5`}>
      <section className='grid grid-cols-1 gap-y-5 grid-rows-2'>
        <div className='relative flex flex-col gap-y-4 before:min-h-[15%] before:w-full before:absolute before:bottom-0 before:bg-[linear-gradient(to_bottom,_rgba(31,31,31,0),_rgba(31,31,31,1))]'>
          <h2 className='px-5 lg:text-base font-mono font-light tracking-widest'>AKTIVITAS TERKINI</h2>
          <div id='aktivitas-terkini' className=' px-5 overflow-y-scroll max-h-[18rem] flex flex-col gap-y-2'>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
            <div className='min-h-[50px] bg-primary/75 rounded-md '></div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-5'>
          <div className='bg-primary'></div>
          <div className='bg-primary'></div>
        </div>
      </section>
      <section className='grid grid-cols-1 grid-rows-[1fr,1fr,1fr,4fr] gap-y-5'>
        <div className='bg-primary flex flex-col p-3 gap-y-3 justify-center'>
          <span className='lg:text-lg'>TOTAL PEMASUKAN</span>
          <span className='lg:text-2xl font-semibold'>Rp 999.000.000</span>
        </div>
        <div className='bg-primary flex flex-col p-3 gap-y-3 justify-center'>
          <span className='lg:text-lg'>TOTAL PENGELUARAN</span>
          <span className='lg:text-2xl font-semibold'>Rp 999.000.000</span>
        </div>
        <div className='bg-primary flex flex-col p-3 gap-y-3 justify-center'>
          <span className='lg:text-lg'>PROFIT BULAN INI</span>
          <span className='lg:text-2xl font-semibold'>Rp 999.000.000</span>
        </div>
        <div className='bg-primary flex flex-col p-3 gap-y-3 justify-center'></div>
      </section>
    </main>
  );
}
