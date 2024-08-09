export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 z-10 flex flex-col justify-around font-bold">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-white text-gray-400 py-2 px-4 rounded border-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
