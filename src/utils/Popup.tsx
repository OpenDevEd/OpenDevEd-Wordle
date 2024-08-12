import { IoMdCloseCircleOutline } from "react-icons/io";
import { PopupProps } from "../types/PropsTypes";

// Popup component to display a modal with a title, content, and a close button
const Popup = ({ title, content, onClose }: PopupProps) => {
  return (
    // Container for the popup that covers the entire screen
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {/* Popup content box with dark background and white text */}
      <div className="bg-darkBg text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Container for the close button */}
        <div className="flex justify-end">
          {/* Close button to trigger the onClose function */}
          <button onClick={onClose} className="">
            <IoMdCloseCircleOutline size={30} />
          </button>
        </div>
        {/* Container for the title and content of the popup */}
        <div className="flex flex-col justify-between items-center mb-2">
          {/* Title of the popup */}
          <h2 className="text-[30px] font-bold ">{title}</h2>
          {/* Content of the popup */}
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
