
import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

function Charts(props) {
  
  const name = props.name;
  console.log("props.name is ",name);
  const [piedata,setpiedata] = useState({
  
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
      },
    ],
  });
  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Count',
        data: [],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Count',
        data: [],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });
  const optionsbar = {
    scales: {
      x: {
          title: {
              display: true,
              text: 'EventID',
              color: 'red'
          }
      },
      y: {
          title: {
              display: true,
              text: 'No. of participants',
              color: 'red'
          }
      }
  }

  }

  const optionsbar1 = {
    scales: {
      x: {
          title: {
              display: true,
              text: 'Organizer Name',
              color: 'red'
          }
      },
      y: {
          title: {
              display: true,
              text: 'Events',
              color: 'red'
          }
      }
    }

  }
  const pieoptions = {

  }
  
  
  
  useEffect(() => {
    Axios.post('http://localhost:3002/dashboard/fetch',name)
      .then((response) => {
        console.log("Data fetched successfully");
        const data = response.data;
        console.log(data);
        const chartDatas = {
          labels: data.map((row) => row.EventID),
          datasets: [
            {
              label: 'Count',
              data: data.map((row) => row.Count),
              backgroundColor: 'aqua',
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        };
        setChartData(chartDatas);
        console.log(chartDatas);
      })
      .catch((error) => {
        console.log("Error fetching")
      })
  }, []);
  useEffect(() => {
    Axios.post('http://localhost:3002/dashboard/bars')
      .then((response) => {
        console.log("Bars fetched successfully");
        const data = response.data;
        console.log(data);
        const chartData = {
          labels: data.map((row) => row.Orgname),
          datasets: [
            {
              label: 'Count',
              data: data.map((row) => row.Count),
              backgroundColor: 'aqua',
              borderColor: 'black',
              borderWidth: 1,
            },
          ],
        };
        setBarData(chartData);
      })
      .catch((error) => {
        console.log("Error fetching data from /dashboard/bars");
      })
  }, []);
  
  
  var val1=0;
  var val2=0;
  useEffect(() => {
    // Fetch data for the first component with the name parameter
    
    Axios.get(`http://localhost:3002/dashboard/pie1/${name}`)
      .then(response => {
        console.log("stuff here")
        console.log(response.data);
        val1=response.data[0].Count;
        console.log("val1= ",val1);
       // setData1(response.data);
      })
      .catch(error => {
        console.error('Error fetching data for the first component:', error);
      });

    // Fetch data for the second component with the name parameter
    Axios.get(`http://localhost:3002/dashboard/pie2/${name}`)
      .then(response => {
        console.log(response.data);
        val2=response.data[0].Count;
        //setData2(response.data);
        console.log("VAL2= ",val2," val1= ",val1);
        console.log("here insdde val1= ",val1," val2= ",val2)
        const piedata = {
          labels: ['Hosted','Participated'],
          datasets: [
            {
              data: [val1,val2],
              backgroundColor: ['aqua','purple']
            }
          ]
        };
        console.log("inside piedata is ",piedata);
        setpiedata(piedata);

      })
      .catch(error => {
        console.error('Error fetching data for the second component:', error);
      });
      
  }, []);

  return (
    <div className="App">
      <div style={{ padding: '20px', margin: 'auto', width: '70%', height: '70%' }}>
        <Bar data={chartData} options={optionsbar} />
      </div>
      <div style={{ padding: '20px', margin: 'auto', width: '70%', height: '70%' }}>
        <Bar data={barData} options={optionsbar1} />
      </div>
      <div style={{padding: '20px', width: '50%'}}>
        <h1>Pie Chart</h1>
        {console.log("Main function",piedata)}
        <Pie data={piedata} options={pieoptions} />
      </div>
    </div>
  );
}

export default Charts;
