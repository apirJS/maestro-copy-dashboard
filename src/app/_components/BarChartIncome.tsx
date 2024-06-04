import { Bar } from 'react-chartjs-2';
import DateRangeBarChart from './DateRangeBarChart';

export default function BarChartIncome() {
  return (
    <div className='relative bg-primary rounded-md flex flex-col justify-center items-center gap-8 py-4 px-1 h-[max-content]'>
      <h4 className='lg:text-sm'>PEMASUKAN</h4>
      <Bar
        data={{
          // 1 to 30
          labels: Array.from({ length: 12 }, (_, i) => i + 1),

          datasets: [
            {
              label: 'Pemasukan',
              data: [12, 19, 3, 5, 2, 3, 9, 10, 12, 15, 20, 25],
              backgroundColor: '#00a3ff',
              borderColor: 'transparent',
              datalabels: {
                display: false,
              },
              // barThickness: 'flex',
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <DateRangeBarChart />
    </div>
  );
}
