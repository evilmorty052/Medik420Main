
import { Result } from 'antd'
const welcome = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/login')
    }, 5000);
  
   
  }, [])
  
  return (
    <div>
  <Result
    status="success"
    title="Registered Successfully!"
    subTitle="You Will Be Redirected To The Login Page Shortly Please Sign In using The Login Information you just Created"
  />
    </div>
  )
}

export default welcome