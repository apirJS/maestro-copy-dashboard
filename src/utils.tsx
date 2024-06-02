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



function registerCharts(): void {
  Chart.register(ArcElement);
  Chart.register(Legend);
  Chart.register(Tooltip);
  Chart.register(ChartDataLabels);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(BarElement);
}

export { registerCharts };
