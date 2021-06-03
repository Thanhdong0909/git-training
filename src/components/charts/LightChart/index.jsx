import React, {useState, useEffect} from 'react';

import HighchartsReact from 'highcharts-react-official';
import HighChart from 'highcharts';
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

const LighChart = ({data}) => {
  const [options, setOptions] = useState({});
  const [reportType, setReportType] = useState('all');

  const generateOptions = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

    return {
      chart: {
        height: 500,
      },
      title: {
        text: 'Tổng ca nhiễm',
      },
      xAxis: {
        categories: categories,
        crosshair: true,
      },
      colors: ['#F3585B'],
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Tổng Ca nhiễm',
          data: data.map((item) => item.Confirmed),
        },
      ],
    };
  };

  useEffect(()=> {
    let optionsData = [];
    switch (reportType) {
      case 'all':
          optionsData = data;
        break;
      case '30':
        optionsData = data.slice(data.length - 30);
        break;
      case '7':
        optionsData = data.slice(data.length - 7);
        break
      default:
        return data;
        break;
    }
    setOptions(generateOptions(optionsData));
  }, [data, reportType]);

  return(
    <div>
      <ButtonGroup
        size='small'
        aria-label='small outlined button group'
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color={reportType === 'all' ? 'secondary' : ''}
          onClick={() => setReportType('all')}
        >
          Tất cả
        </Button>
        <Button
          color={reportType === '30' ? 'secondary' : ''}
          onClick={() => setReportType('30')}
        >
          30 ngày
        </Button>
        <Button
          color={reportType === '7' ? 'secondary' : ''}
          onClick={() => setReportType('7')}
        >
          7 ngày
        </Button>
      </ButtonGroup>
      <HighchartsReact
        hightcharts={HighChart}
        options={options}
      />
    </div>
  )
}
export default LighChart;