import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import dayjs from 'dayjs';

function LineChart({label, entries}) {

   
     const data = {
       labels: label,
       datasets: [
         {
           label: 'last 30 days',
           data: entries,
           fill: true,
           borderColor: '#009ceb',
           tension: 0.1,
           backgroundColor: '#e3eff6'
         },
       ],
       
     };
     
     const options = {
       scales: {
        x: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
              return index % 2 === 0 ? this.getLabelForValue(value) : '';

            }
        }
        },
        y: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return '$' + value;
              }
          }
      }
       },
       backgroundColor: 'white'
     };
     
     return(
   <>
   <div className='w-full '>
   <Line data={data} options={options} />
   </div>
   </>
     )
   }


   export function StockChart({label, entries}) {
    const data = {
      labels: label,
      datasets: [
        {
          label: 'last 7 days',
          data: entries,
          fill: true,
          borderColor: '#009ceb',
          tension: 0.1,
          backgroundColor: '#e3eff6',
          skipNull:false
          
          
        },
      ],
      
    };
  
    return(
  <>
   {/* <h3 className='text-center'>2022 Performance</h3> */}
  <div className='w-full '>
  <Line  data={data}  />
  </div>
  </>
    )
   }

   export function SevenDayChart({ entries}) {


const today = dayjs();

const seven_days_ago = today.subtract(7,'days').format('DD/MM')
const six_days_ago = today.subtract(6,'days').format('DD/MM')
const five_days_ago = today.subtract(5,'days').format('DD/MM')
const four_days_ago = today.subtract(4,'days').format('DD/MM')
const three_days_ago = today.subtract(3,'days').format('DD/MM')
const two_days_ago = today.subtract(2,'days').format('DD/MM')
const one_days_ago = today.subtract(1,'days').format('DD/MM')
const thisday = today.format('DD/MM')

const label=[seven_days_ago,six_days_ago,five_days_ago,four_days_ago,three_days_ago,two_days_ago,one_days_ago]

    const data = {
      labels: label,
      datasets: [
        {
          label: 'last 7 days',
          data: entries,
          fill: true,
          borderColor: '#009ceb',
          tension: 0.1,
          backgroundColor: '#e3eff6',
          skipNull:false
          
          
        },
      ],
      
    };
 



    const chartOptions = {
      scales: {
        x: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
              return index % 2 === 0 ? this.getLabelForValue(value) : '';

            }
        }
        },
        y: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return '$' + value;
              }
          }
      }
      }
    };
  
    return(
  <>
   {/* <h3 className='text-center'>2022 Performance</h3> */}
  <div className='w-full'>
  <Line  data={data} options={chartOptions}  />
  </div>
  </>
    )
   }
   
   export function AnnualChart({ entries}) {


const today = dayjs();

const labels = Array.from({ length: 12 }, (_, i) => {
  const month = today.subtract(i, 'month').format('MMM');
  const year = today.subtract(i, 'month').format('YYYY');
  return `${month}${year}`;
}).reverse();


    const data = {
      labels: labels,
      datasets: [
        {
          label: 'last year',
          data: entries,
          fill: true,
          borderColor: '#009ceb',
          tension: 0.1,
          backgroundColor: '#e3eff6',
          skipNull:false
          
          
        },
      ],
      
    };
 



    const chartOptions = {
      scales: {
        x: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
              if (index == 0) {
                return this.getLabelForValue(value)
              }
             else if (index == 11) {
                return this.getLabelForValue(value)
              }

            }
        }
        },
        y: {
          grid:{
            color: '#f6f8fa'
          },
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                return index % 2 === 0 ? this.getLabelForValue(value) : '';
              }
          }
      }
      }
    };
  
    return(
  <>
   {/* <h3 className='text-center'>2022 Performance</h3> */}
  <div className='w-full'>
  <Line  data={data} options={chartOptions}  />
  </div>
  </>
    )
   }

export default LineChart