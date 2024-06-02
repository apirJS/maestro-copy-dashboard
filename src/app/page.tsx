'use client';

import { Montserrat } from 'next/font/google';
import TotalList from './_components/TotalList';
import { dummyTotalList } from '@/dummyData';
import PieChart from './_components/PieChart';
import BarChartPemasukan from './_components/BarChartPemasukan';
import BarChartPengeluaran from './_components/BarChartPengeluaran';
import LogAktivitas from './_components/LogAktivitas';
import HeaderLogAktivitas from './_components/HeaderLogAktivitas';
import { registerCharts } from '@/utils';

const monsterrat = Montserrat({ subsets: ['latin'] });
registerCharts();

export default function Dashboard() {
  return (
    <main
      className={`${monsterrat.className} grid grid-cols-[3fr,1.25fr] p-5 gap-x-5`}
    >
      <section className='grid grid-cols-1 gap-y-5 grid-rows-2'>
        <div className='relative flex flex-col gap-y-4'>
          <HeaderLogAktivitas />
          <LogAktivitas />
        </div>
        <div className='grid grid-cols-2 gap-x-5 pt-8'>
          <BarChartPemasukan />
          <BarChartPengeluaran />
        </div>
      </section>
      <section className='grid grid-cols-1 grid-rows-[1fr,1fr,1fr,4fr] gap-y-5 '>
        <TotalList />
        <PieChart />
      </section>
    </main>
  );
}
