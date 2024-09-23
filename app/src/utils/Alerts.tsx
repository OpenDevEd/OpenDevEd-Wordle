import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { alertProps } from './types';
import { useEffect } from 'react';
 
const Alerts = ({alertState, setAlertState}:{alertState:alertProps, setAlertState:(arg:alertProps)=>void}) => {
    useEffect(()=>{
          if(alertState?.state)
        {
            toast.dark(alertState?.message, {
                position: "top-right"
            });
        }
        setTimeout(()=>setAlertState({state:false}),200)
    },[alertState?.state])
        
    return (
    
    <div className=''>
          <ToastContainer  stacked autoClose={2000}/>
    </div>
  )
}

export default Alerts