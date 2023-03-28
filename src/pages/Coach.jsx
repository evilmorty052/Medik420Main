import  { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { useQuery } from '@tanstack/react-query';
import { client, urlFor } from '../../lib/client';
import Loader from '../components/Loader';
import cbd from '../assets/airbnb.png'
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';


function Coach() {
  const { Paragraph, Text } = Typography;
  const emailID = localStorage.getItem('email')
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;

 let notifications = user && user[0].notifications 
//  let preview = notifications && notifications.reverse()



  const [sidebarOpen, setSidebarOpen] = useState(false);
if(!user){
  return (
    <Loader/>
  )
}
  return (
<>
{ 
  <div className="flex h-screen overflow-hidden bg-plat">

  {/* Sidebar */}
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} avatar={user[0].avatar && urlFor(user[0].avatar)}/>

  {/* Content area */}
  <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

    {/*  Site header */}
    <Header 
    sidebarOpen={sidebarOpen}
   setSidebarOpen={setSidebarOpen}
    name={user[0].firstname}
    notifications={user[0].notifications && notifications}
    avatar={user[0].avatar ? `${urlFor(user[0].avatar)}` : cbd} />

    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-2 w-full max-w-9xl mx-auto">

        {/* Welcome banner */}
        {/* <div className=' '>
        <WelcomeBanner name={user[0].firstname} text="Please Subscribe To Access Hive Coach" />
        </div> */}
        <Result
    status="info"
    title="UNAUTHORIZED"
    subTitle="HIVE COACH IS A PAID FEATURE PLEASE SUBSCRIBE TO CONTINUE "
    extra={[
      <Button style={{background: '#00c4ee'}} type="primary" key="console">
        Settings
      </Button>,
      <Button style={{background: '#00c4ee'}} type="primary" key="buy">Subscribe</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          It Seems You Are On A Free Plan:
        </Text>
      </Paragraph>
      <Paragraph>
      <span>1.</span> Subscribe to the Growth Plan Or Higher
       
      </Paragraph>
      <Paragraph>
      <span>2.</span>    Authorize Hive Coach From Your Profile Settings Page
      </Paragraph>
    </div>
  </Result>
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Avatars */}
          {/* <DashboardAvatars /> */}

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          </div>
 
        </div>
        <div className="grid grid-cols-12 gap-6">
         
        </div>
      </div>
      
    </main>
    
    {/* <Banner /> */}

  </div>
</div>
}
</>
    
  );
}

export default Coach;