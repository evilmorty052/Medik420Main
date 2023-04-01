import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import useFetch from '../../hooks/useFetch'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export default function NewsTab() {
  
    let [categories] = useState({
      News : [
        {
          id: 1,
          title: 'Digital Farming set to launch in a week',
          date: '5h ago',
          
        },
        {
          id: 2,
          title: "Retail Assist Now Available in Europe",
          date: '2h ago',
          
        },
      ],
      Tips: [
        {
          id: 1,
          title: 'Have you added Topicals to your daily yield? monthly forecast projects heavy purchases!',
          
          
        },
        {
          id: 2,
          title: 'The most innovative things happening With CBD',
          date: '3d ago',
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [

        {
          id: 1,
          title: "Digital Farming NFT ",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
        {
          id: 2,
          title: "Claire Mac ",
          date: '4min ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    })
  
    return (
      <>
      <motion.div >
        
      <div className="w-full   px-2  sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 sm:min-w-[470px] max-w-[470px]">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-gray-200 p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>
  
                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
  
                      <a
                        href="#"
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      </motion.div>
      </>
    )
  }