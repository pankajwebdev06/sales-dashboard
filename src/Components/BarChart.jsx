"use client"
import {Bar} from 'react-chartjs-2';


import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend,
)

const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets:[],
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(()=>{
        setChartData({
            labels:['MON','TUE','WED','THU','FRI','SAT','SUN'],
            datasets:[
                {
                    label:'sales $',
                    data:[18127, 22011,19994,24182,17884,22427,11435],
                    borderColor:'rgb(53,162,235)',
                    backgroundColor:'rgb(53,162,235,0.4)',
                }
            ]
        })
        setChartOptions({
            plugins:{
                legends:{
                    position:'top',
                },
                title:{
                    display:true,
                    text:'Daily Revenue',
                },
            },
            maintainAspectRatio:false,
            responsive:true,
        })
    },[])

  return (
    <>
       <div className='w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions}/>
       </div>
    </>
  )
}

export default BarChart