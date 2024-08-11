export default function Loading() {
  return (
    <div className="w-screen h-screen absolute inset-0 flex justify-center items-center bg-gray-100 opacity-75">
      <div className="animate-spin text-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5em"
          height="5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
