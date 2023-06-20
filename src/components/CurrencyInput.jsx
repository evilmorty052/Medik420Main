import { useState } from "react";

const CurrencyInput = ({value, setValue, placeholder}) => {
     // Use state to store the input value
  
    // Format the input value as a currency
    const handleChange = (event) => {
      const inputValue = event.target.value;
      const formattedValue = inputValue.replace(/[^0-9.]/g, '') // Remove any non-numeric or decimal characters
        .replace(/(\..*)\./g, '$1') // Remove any consecutive decimal points
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // Add a comma after every third digit
        setValue(`$${formattedValue}`);
    };
  
    return (
      <div className=" flex  border-b ">
         {/* <p className="text-2xl font-semibold -ml-2">$</p> */}
         {/* <hr  className="h-10 bg-blk" /> */}
        <input
        placeholder={placeholder}
      className="   border-t-0 border-r-0 border-l-0 border-b focus:border-0 focus:ring-0  focus:border-b text-2xl font-semibold  w-full placeholder:text-lg md:w-[478px] flex-1"
        type="text"
        value={value}
        onChange={handleChange}
      />
      </div>
    );
  };

export default CurrencyInput