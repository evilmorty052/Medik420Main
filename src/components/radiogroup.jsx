import { Children, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Button } from 'antd'

const plans = [
  {
    name: 'INVESTMENT'
  },
  {
    name: 'DIGITAL FARMING',
  },
  {
    name: 'SMALL BUSINESS ASSISTANCE'
  },
]

export default function RadioGroups({options, func, func2, show , show2}) {
  const [selected, setSelected] = useState(options?.[0])

  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup defaultChecked={options?.[0]} value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {options?.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked ? 'bg-green-300 bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true"></span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0  ">
                          <CheckIcon className="h-6 w-6 text-slate-800 " />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
       
        </RadioGroup>
      {show &&  
      <div className='mt-10 w-full'>
        <button className='w-full py-2 border border-white shadow-xl  rounded-3xl'  style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary'  onClick={()=>{func(selected)}}>
          Confirm
        </button>
        </div>}
      {show2 &&  
      <div className='mt-4 w-full'>
        <button className='w-full text-white py-2 border border-white shadow-xl  rounded-3xl'  style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary'  onClick={()=>{func2(selected)}}>
          Skip
        </button>
        </div>}
     
      </div>
    
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
