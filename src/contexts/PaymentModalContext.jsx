import {createContext, useState, useContext, useEffect} from "react"
import {PaymentModal, WithdrawalModal, TransferModal} from "../components"
import {Link} from "react-router-dom"
import {bitcoin} from "../assets"

export const PaymentModalContext = createContext();

export const UsePaymentModalContext = () => {
return useContext(PaymentModalContext);
}



const PaymentModalProvider = ({ children }) => {
    const [invisible, setInvisible] = useState(true);
    const [actionsModal, setActionsModal] = useState(false);
    const [subscriptionModal, setSubscriptionModal] = useState(false);
    const [paymentText, setPaymentText] = useState("");
    const [paymentHeader, setPaymentHeader] = useState("");
    const [user, setuser] = useState(null)
   
    const ActionsModal = ({func, close, paymentHeader, paymentText}) => {
    

        const [action, setAction] = useState("Actions")
        const [modal, setModal] = useState(true)
    
        const Actions = () => {
            return(
                <div className={`w-full ${width < 760 && "min-w-[calc(100vw-20px)]"}   sm:w-[400px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 `}>
                <h5 onClick={func} class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                    Please select an option.
                </h5>
                <p class="text-sm font-normal text-gray-500 ">{paymentText}</p>
                <ul class="my-4 space-y-3">
                    <li>
                        <Link onClick={close} to={"/dashboard/withdraw"}   className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                            <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/289534/cash.svg"}  />
                            <span class="flex-1 ml-3 whitespace-nowrap">Withdraw</span>
                            {/* <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded  ">Popular</span> */}
                            
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/withdraw/transfer"} onClick={close} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                            <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/228999/transfer.svg"}  />
                            <span class="flex-1 ml-3 whitespace-nowrap">Transfer</span>
                        </Link>
                    </li>
                    <li>
                        <a onClick={() => handleView('Topup')} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                            <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/499786/add-to.svg"}  />
                            <span class="flex-1 ml-3 whitespace-nowrap">Add Money</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                            <img aria-hidden="true" class="w-8" src={bitcoin}  />
                            <span class="flex-1 ml-3 whitespace-nowrap">Bank Transfer</span>
                        </a>
                    </li> */}
                    <li>
                        <a onClick={close} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                            {/* <img aria-hidden="true" class="w-8" src={bitcoin}  /> */}
                            <span class="btnHollow text-center">Cancel</span>
                        </a>
                    </li>
                </ul>
                <div>
                    {/* <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline ">
                        <svg class="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                        Bitcoin Payments are processed instantly.</a> */}
                </div>
            </div>
            )
        }
      
        const [view, setView] = useState(<Actions/>)
    
        const handleView = (action) => {
            switch (action) {
                case 'Actions':
                setView(<Actions/>)
                  break;
                case 'Withdrawal':
                setView(<WithdrawalModal user={user} modal={modal} cancel={()=> setModal(false)&handleView('Actions') }/>)
                  break;
                case 'Transfer':
                setView(<TransferModal modal={modal} cancel={()=> setModal(false)&handleView('Actions') }/>)
                  break;
                  case 'Topup':
                setView(<PaymentModal 
                    paymentText={"Pick an option to add funds to your account. "}
                    paymentHeader={"Payment methods"}
                    close={() => handleView('Actions')}/>)
                  break;
                     
                default:          
                  break;
              }
        }
    
       
        const width = window.innerWidth
         return (
          <div className="fixed inset-0 grid place-content-center bg-white/80 z-[500]">
           {/* actions */}
           {/* <Actions/> */}
           {view}
          </div>
         );
       };
    
       const SubscriptionModal = ({close}) => {
        const width = window.innerWidth
        return(
            <div className="fixed inset-0 grid place-content-center bg-white/80 z-[500]">
        <div className={`w-full ${width < 760 && "min-w-[calc(100vw-20px)]"}   sm:w-[400px] max-w-[400px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 `}>
            <h5  class="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
                Pick a plan.
            </h5>
            <p class="text-sm font-normal text-gray-500 ">{"Choose a premium plan to continue."}</p>
            <ul class="my-4 space-y-3">
                <li>
                    <a href="https://commerce.coinbase.com/checkout/9f9b8dad-96e5-4438-a601-57d5e0a28537" target="blank"   class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                        <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/289534/cash.svg"}  />
                        <div className="flex w-full justify-between items-center">
                        <span class=" ml-3 whitespace-nowrap text-sm">Basic Plan</span>
                        <span class="self-end text-sm">$800</span>
                        </div>  
                    </a>
                </li>
                <li>
                    <a  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                        <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/228999/transfer.svg"}  />
                        <div className="flex w-full justify-between items-center">
                        <span class=" ml-3 whitespace-nowrap text-sm">Growth Plan</span>
                        <span class="self-end text-sm">$1250</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a  class="flex  items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                        <img aria-hidden="true" class="w-8" src={"https://www.svgrepo.com/show/499786/add-to.svg"}  />
                        <div className="flex w-full justify-between items-center">
                        <span class=" ml-3 whitespace-nowrap text-sm">Executive Plan</span>
                        <span class="self-end text-sm">$2750</span>
                        </div>
                    </a>
                </li>
                {/* <li>
                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                        <img aria-hidden="true" class="w-8" src={bitcoin}  />
                        <span class="flex-1 ml-3 whitespace-nowrap">Bank Transfer</span>
                    </a>
                </li> */}
                <li>
                    <a onClick={close} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow   ">
                        {/* <img aria-hidden="true" class="w-8" src={bitcoin}  /> */}
                        <span class="btnHollow text-center">Cancel</span>
                    </a>
                </li>
            </ul>
            <div>
                {/* <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline ">
                    <svg class="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                    Bitcoin Payments are processed instantly.</a> */}
            </div>
        </div>
           </div>
        )
      }

    return (
      <PaymentModalContext.Provider value={{ invisible, setInvisible, setPaymentText, setPaymentHeader, setActionsModal, setSubscriptionModal, setuser }}>
        {children}
        {!invisible && 
        <PaymentModal 
        func={() => setInvisible(true)}
        close={() => setInvisible(true)}
        paymentText={paymentText}
        paymentHeader={paymentHeader}
        />}
        {actionsModal && 
        <ActionsModal  
        func={() => setInvisible(true)}
        close={() => setActionsModal(false)}
        paymentText={paymentText}
        paymentHeader={paymentHeader}
        />}
        {subscriptionModal &&
         <SubscriptionModal  
        close={() => setSubscriptionModal(false)}
        />}
      </PaymentModalContext.Provider>
    );
  };

  export default PaymentModalProvider