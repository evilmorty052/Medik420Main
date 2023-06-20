

const Tabs = ({tab1, tab2 , setactive, section1, section2}) => {
  return (
          <>
            <div className="flex px-4 ">
              <div className="flex cursor-pointer  w-full ">
                <div
                  onClick={setactive}
                  className={
                    !tab1
                      ? `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center`
                      : `pb-4 border-b-8 border-blue-600 w-1/2 flex justify-center`
                  }
                >
                  <a className={`text-xl sm:text-2xl font-semibold text-center transition-all duration-200 ease-in ${tab1 && 'text-blue-600'}`}>{section1}</a>
                </div>
                <div
                  onClick={setactive}
                  className={
                    !tab2
                      ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center transition-all duration-200 ease-out `
                      : `pb-4 border-b-8 border-blue-600 w-1/2 flex justify-center transition-all duration-200 ease-out`
                  }
                >
                  <a className={`text-xl sm:text-2xl font-semibold text-center transition-all duration-200 ease-in ${tab2 && 'text-blue-600'}`}>{section2}</a>
                </div>
              </div>
            </div>
          </>
  )
}

export default Tabs