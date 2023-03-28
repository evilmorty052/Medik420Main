

export default function MenuButton({buttonText, onClick, disabled}) {
  return (
   
        <a onClick={onClick} className={!disabled ? "bg-green-300  cursor-pointer hover:bg-green-400 hover:ring-white ring-1 ring-green-200 inline-block  py-[7px] w-full min-w-[100px] max-w-[200px] shadow-2xl text-center my-4 rounded-2xl" : "bg-gray-300   cursor-not-allowed hover:ring-white ring-1 ring-green-200 inline-block   py-[7px] w-full min-w-[100px] max-w-[200px] text-center my-4 rounded-2xl" }>
            <span className="text-[20px] text-gray-800  tracking-wider font-[600]  font-space">{buttonText}</span>
        </a>
  )
}
