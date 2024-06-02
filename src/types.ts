interface TotalItem {
  title: string;
  amount: number;
}

interface PieChartData {
  labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

export type { TotalItem } 