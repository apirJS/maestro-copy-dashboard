import { Bar } from 'react-chartjs-2';

export default function BarChartPemasukan() {
  return (
    <div className='flex h-full w-full p-10'>
      <Bar
        data={{
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'Mei',
            'Jun',
            'Jul',
            'Agu',
            'Sep',
            'Okt',
            'Nov',
            'Des',
          ],
          datasets: [
            {
              label: 'Pemasukan',
              data: [
                1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000,
                8000000, 9000000, 10000000, 11000000, 12000000,
              ],
              backgroundColor: '#0091FF',
              barThickness: 30,
            },
          ],
        }}
        options={{
          plugins: {
            datalabels: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
