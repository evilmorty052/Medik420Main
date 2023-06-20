import {BizCard} from "./index"
import {useState} from "react"
import {FaSpinner, FaAngleLeft, FaAngleRight, FaCircle} from 'react-icons/fa'
import {urlFor} from "../../../../lib/client"

 function Page ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4, hiveData, searchTerm,setActiveCompany }) {
    const [currentPage, setCurrentPage] = useState(1);
  
    const itemsPerPage = 4;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.round(data?.length / itemsPerPage)
  
    // function handleShowInvestPage(company) {
    //   setActiveCompany(company)
    //   investing ?  setinvesting(false) : setinvesting(true)
    // }
  
    
   function Circle(params) {
    const [circles, setcircles] = useState([])
  
    data?.forEach((element, index) => {  
    if(index >= totalPages)return
    // if(index >= 5){
    //   return
    // }
    circles.push(element)
    });
  
    
    console.log(totalPages)
   return(
    <>
    <div className='flex gap-x-[4px] items-center'>
    {circles.map((item, index)=>{
  
     
      return(
        <>
         <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{currentPage == index+1 ? <FaCircle style={{fontSize:"20px"}}/> : <FaCircle style={{fontSize:"12px"}}/> }</l1>   
        </>
      )
    })}
    </div>
    </>
   ) 
   }
    function handleDecreaseSlide(params) {
      if(currentPage == 1) return
      setCurrentPage(currentPage - 1)
      console.log(currentPage)
    }
    function handleIncreaseSlide(params) {
      if(currentPage == totalPages) return
      setCurrentPage(currentPage + 1)
    }
  
    return (
      <>
        <div className='space-y-8 pb-8'>
     { !searchTerm && <div className="flex topnav w-full justify-center items-center sm:px-12 ">
                        <ul className="flex  min-w-[280px] justify-center items-center ">
                       <li className="text-2xl mr-2">
                      {  <a className={`${currentPage == 1 && 'text-gray-200'}`}><FaAngleLeft onClick={handleDecreaseSlide}  /></a>}
                      </li>
                         <div className='  overscroll-x-contain  flex justify-center'>
                         <Circle/>
                        </div> 
                        
                       <li className="text-2xl">
                       {<a className={`${indexOfLastItem >= data?.length && 'text-gray-200' }`} ><FaAngleRight  onClick={handleIncreaseSlide}/></a>}
                      </li>
                        </ul>
           </div>}
      <div className="flex-col  flex gap-y-[50px]  sm:gap-x-8 md:gap-x-12 md:px-4 lg:px-12 sm:container mx-auto max-w-5xl">
        {currentItems?.map((item) => (
          <div key={item.id} >
            {/* Render your item here */}
            <BizCard 
             to={`company/${item._id}`}
            image={urlFor(item.image)} 
            // image={(item.image)} 
            startup={item.name}
            website={item.website}
            description={item.description}
            roi={item.roi}
            seats={item.seats}
            category={item.category}
            func={() => {
              setActiveCompany(item)
              console.log(item)
            }}
             />
          </div>
        ))}
  
      </div>
  
             { <div className="flex topnav w-full justify-center items-center">
                        <ul className="flex  min-w-[280px] justify-center items-center ">
                       <li className="text-2xl mr-2">
                      {  <a className={`${currentPage == 1 && 'text-gray-200'}`}><FaAngleLeft onClick={handleDecreaseSlide}  /></a>}
                      </li>
                         <div className='  overscroll-x-contain  flex justify-center'>
                         <Circle/>
                        </div> 
                        
                       <li className="text-2xl">
                       {<a className={`${indexOfLastItem >= data?.length && 'text-gray-200' }`} ><FaAngleRight  onClick={handleIncreaseSlide}/></a>}
                      </li>
                        </ul>
           </div>}
      </div>
     
      </>
    );
  };

  export default Page