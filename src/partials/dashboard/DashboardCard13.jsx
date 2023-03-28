import {useState} from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'antd';
import { FaChartLine } from 'react-icons/fa';
import {FallOutlined, RiseOutlined} from '@ant-design/icons'
function DashboardCard13() {
  
  
  function Profit({amount, name}) {
    return(
   
    <li className="flex px-2">
      <div className="w-9 h-9 rounded-full shrink-0 bg-white my-2 mr-3 flex justify-center items-center ">
      <RiseOutlined style={{fontSize: 20 , color: 'green'}}/>
    </div>
       <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
         <div className="grow flex justify-between">
           <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{name}</a></div>
           <div className="shrink-0 self-start ml-2">
             <span className="font-medium text-green-500">{`+${amount}`}</span>
           </div>
         </div>
       </div>
     </li>
    )
  }
  
  
  function Stale({amount, name}) {
    return(
     
      <li className="flex px-2">
  <div className="w-9 h-9 rounded-full shrink-0 bg-slate-200 my-2 mr-3">
      <svg className="w-9 h-9 fill-current text-slate-400" viewBox="0 0 36 36">
        <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
      </svg>
    </div>
       <div className="grow flex items-center border-b border-slate-100 text-sm py-2">
         <div className="grow flex justify-between">
           <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{name}</a> </div>
           <div className="shrink-0 self-start ml-2">
             <span className="font-medium text-slate-800 line-through">{amount}</span>
           </div>
         </div>
       </div>
     </li>
    )
  }
  
  
  function Loss({amount, name}) {
    return(
     
     <li className="flex px-2">
    <div className="w-9 h-9 rounded-full shrink-0 bg-white my-2 mr-3 flex justify-center items-center">
      <FallOutlined style={{fontSize:20 , color: 'red'}}/>
    </div>      
     <div className="grow flex items-center text-sm py-2">
       <div className="grow flex justify-between">
         <div className="self-center"><a className="font-medium text-slate-800 hover:text-slate-900" href="#0">{name}</a> </div>
         <div className="shrink-0 self-start ml-2">
           <span className="font-medium text-rose-600">{`-$${amount}`}</span>
         </div>
       </div>
     </div>
   </li>
    )
  }
  
  function Breakdown({data}) {
  return(
    <>
    <motion.ul
     initial={{ x: '-100%' }}
     animate={{ x: 0 }}
     transition={{ duration: 0.5 , type:'spring' }}
     className='my-1'>
    {data?.map((item)=>{
  if(item.status == 'Loss'){
    return(
      <Loss amount={item.amount} name={item.name}/>
    )
  }
  else if(item.status == 'Profit'){
    return(
      <Profit amount={item.amount} name={item.name}/>
    )
  }
  else if(item.status == 'Stale'){
    return(
      <Stale amount={item.amount} name={item.name}/>
    )
  }
 })}
    </motion.ul>
    </>
  )
  }


  let data1 = [
    {
     key: '1',
     name: 'Thunder Buds',
     status: 'Loss',
     amount: '46.99'
  },
    {
     key: '2',
     name: 'Zambiza',
     status: 'Profit',
     amount: '4681'
  },
    {
     key: '3',
     name: 'Jamaican Meatpie',
     status: 'Stale',
     amount: '84.99'
  }

]
  let data2 = [
    {
     key: '1',
     name: 'CBD GUMS',
     status: 'Loss',
     amount: '46.99'
  },
    {
     key: '2',
     name: 'CBD OIL',
     status: 'Loss',
     amount: '4681'
  },
    {
     key: '3',
     name: 'CBD Honey',
     status: 'Loss',
     amount: '84.99'
  }

]
  let data3 = [
    {
     key: '1',
     name: 'Witch Doctor',
     status: 'Profit',
     amount: '46.99'
  },
    {
     key: '2',
     name: 'Orange Kiss',
     status: 'Profit',
     amount: '4681'
  },
    {
     key: '3',
     name: 'Site Dope',
     status: 'Profit',
     amount: '84.99'
  }

]
 
const [data, setdata] = useState(data1)

  return (
    <div className="col-span-full xl:col-span-6 bg-gray-100 shadow-xl rounded-xl border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 rounded-3xl">
        <h2 className="font-semibold text-slate-800">Weekly Sales Breakdown</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="text-xs uppercase text-slate-400 bg-white rounded-3xl px-4 font-semibold p-2">
            <div className='flex gap-x-2'>
             <Tag color='green'><span className='cursor-pointer ' onClick={()=> setdata(data1)}>Strains</span></Tag>  <Tag color='geekblue'><span className='cursor-pointer ' onClick={()=> setdata(data2)}>Wholesale</span></Tag> <Tag color='volcano'><span className='cursor-pointer ' onClick={()=> setdata(data3)}>Hives</span></Tag> 
            </div>
          </header>
          <Breakdown data={data} />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard13;
