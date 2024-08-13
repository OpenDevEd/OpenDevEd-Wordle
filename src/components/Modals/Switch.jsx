import {useContext} from 'react'
import {GameContext} from '../Context/Context'

const OnOffSwitch = ({ isOn, handleToggle }) => {

  const {color } = useContext(GameContext); 
 
  return (
    <div style={{transition: 'background-color 0.3s'}} className={` flex items-center border-2 w-[50px] h-[24px] ${isOn ? 'bg-green-700' : color.background } rounded-xl cursor-pointer p-0.5`} onClick={handleToggle}>
      <div
        style={{
          width: '20px',
          height: '20px',
          transform: isOn ? 'translateX(24px)' : 'translateX(0)',
          transition: 'transform 0.3s',
        }}

        className={`bg-white border-2 rounded-full`}
      />
    </div>
  );
};

export default OnOffSwitch;
