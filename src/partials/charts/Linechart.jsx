import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function LineChart({label, entries}) {
    // const signups = [
    //    10257,
    //    11245,
    //    11902,
    //    10834,
    //    12342,
    //    10419,
    //    12738,
    //  ];
//    const activeUsers = signups.map((value) => Math.round(value * 0.92));
   
     const data = {
       labels: label,
       datasets: [
         {
           label: 'last 30 days',
           data: entries,
           fill: true,
           borderColor: 'rgb(75, 192, 192)',
           tension: 0.1,
           backgroundColor: '#8DB89B'
         },
       ],
       
     };
     
     const options = {
       scales: {
         yAxes: [
           {
             ticks: {
               beginAtZero: true
             },
             
           }
         ]
       },
       backgroundColor: 'white'
     };
     
     return(
   <>
    {/* <h3 className='text-center'>2022 Performance</h3> */}
   <div className='w-full'>
   <Line data={data} options={options} />
   </div>
   </>
     )
   }

export default LineChart