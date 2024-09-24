import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { alertProps } from '../utils/types';
import { useEffect } from 'react';
 
const Alerts = ({alertState, setAlertState}:{alertState:alertProps, setAlertState:(arg:alertProps)=>void}) => {
    useEffect(()=>{
          if(alertState?.state)
        {
            toast(alertState?.message, {
                position: "top-right"
            });
        }
        setTimeout(()=>setAlertState({state:false}),200)
    },[alertState?.state])
        
    return (
    
    <div className='mt-10'>
          <ToastContainer   
            className="text-[16px] mt-[60px]"
            stacked 
            autoClose={2000} 
            hideProgressBar 
            theme='light'/>
    </div>
  )
}

export default Alerts