import { Pie } from 'react-chartjs-2';



export default function PieChart() {
  return (
    <div className='w-full h-full flex justify-center p-1 mt-4'>
      <Pie
        data={{
          labels: ['Pemasukan', 'Pengeluaran'],
          datasets: [
            {
              data: [40, 60],
              backgroundColor: ['#0091FF', '#0072B2'],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          borderColor: 'transparent',
          plugins: {
            legend: {
              position: 'right',
              align: 'end',
              fullSize: false,
            },
            datalabels: {
              display: true,
              color: '#ffffffcd',
              font: {
                size: 22,
                weight: 'bold',
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
