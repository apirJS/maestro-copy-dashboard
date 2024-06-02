import { Pie } from 'react-chartjs-2';

export default function PieChart() {
  return (
    <div className='bg-primary relative flex flex-col p-3 gap-y-3 justify-center rounded-md'>
      <h4 className='absolute top-2 lg:text-sm'>PERSENTASE </h4>
      <Pie data={{
        labels: ['Pengeluaran', 'Pemasukan' ],
        datasets: [
          {
            label: 'Total %',
            data: [60, 40],
            backgroundColor: ['#00a3ff', '#4400ff'],
            borderColor: 'transparent',
            offset: 12,
            datalabels: {
              font: {
                size: 28,
                weight: 'bolder'
              },
              color: 'white',
            }
          },
        ],
      }}
      />
    </div>
  );
}
