import {useContext } from 'react'
import {GameContext} from '../Context/Context'
import OnOffSwitch from './Switch'


import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { IoCloseOutline } from 'react-icons/io5';


export const SettingModal = ({ setActiveModal,  }) => {

  const {color , setColor , theme  , setTheme} = useContext(GameContext); 
  

  const handleThemeChange = (selectedTheme) => {
    switch (selectedTheme) {
      case 'dark':
        setColor({ text: 'text-white', background: 'bg-slate-950' });
        break;
      case 'default':
        setColor({ text: 'text-black', background: 'bg-white' });
        break;
      case 'red':
        setColor({ text: 'text-white', background: 'bg-red-400' });
        break;
      default:
        setColor({ text: 'text-black', background: 'bg-white' });
        break;
    }
    setTheme(selectedTheme); 
  };

  return (
    <div
      className={` w-full h-full  ml-auto mr-auto md:w-[500px] md:h-[700px] shadow-2xl md:rounded-3xl p-5 md:border-2 z-20 ${color.background} ${color.text}`}
    >
      <IoCloseOutline
        onClick={() => setActiveModal('')}
        className="float-end cursor-pointer"
        size={30}
      />
     <div className='h-1/6 w-full mt-2 flex flex-col justify-center items-center border-b-2'>
          <h1 className='text-4xl font-bold mb-3'>SETTINGS</h1>
     </div>
      <div className='h-4/6 w-full flex justify-center items-center flex-col gap-16 mt-8'>
        <div className='flex gap-5 flex-wrap'>

          <FaRegMoon onClick={() => handleThemeChange('dark')} size={40}/>
          <OnOffSwitch isOn={theme === 'dark'}  handleToggle={() => handleThemeChange('dark')} />
        </div>
        <div className='flex gap-5 flex-wrap'>
          <FaRegSun onClick={() => handleThemeChange('default')} size={40} />
          <OnOffSwitch isOn={theme === 'default'} handleToggle={() => handleThemeChange('default')} />
        </div>
        <div className='flex gap-5 flex-wrap'>
          <ImFire onClick={() => handleThemeChange('red')} size={40}/>
          <OnOffSwitch isOn={theme === 'red'} handleToggle={() => handleThemeChange('red')}/>
        </div>
      </div>
    </div>
  );
};


