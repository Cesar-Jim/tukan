import { useState, useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import AppContext from '../../context/context';

const ChartComponent = ({ title, subtitle, chartData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [typeOfChart, setTypeOfChart] = useState('Line');
  const { isLoading, setIsLoadingInState } = useContext(AppContext);

  const options = {
    responsive: true,
    SVGPreserveAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const labels = chartData ? chartData.map((point) => point.fecha) : [];

  const data = {
    labels,
    datasets: [
      {
        label: subtitle,
        fill: false,
        data: chartData ? chartData.map((point) => point.dato) : [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const handleChartTypeChange = (newChartType) => {
    setTypeOfChart(newChartType);
  };

  return (
    <>
      <RadioGroup defaultValue="1" m="8px 0 24px 0">
        <Stack spacing={4} direction="row" justifyContent="center">
          <Radio value="1" onClick={() => handleChartTypeChange('Line')}>
            Line
          </Radio>
          <Radio value="2" onClick={() => handleChartTypeChange('Bar')}>
            Bar
          </Radio>
        </Stack>
      </RadioGroup>
      {typeOfChart === 'Line' && (
        <Line options={options} data={data} width={700} height={300} />
      )}
      {typeOfChart === 'Bar' && (
        <Bar options={options} data={data} width={700} height={300} />
      )}
    </>
  );
};

export default ChartComponent;
