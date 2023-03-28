import React from "react";
import {NavLink as Link} from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ styles }) => (
  <Link to='/register'> <motion.button whileTap={{ scale: 1.3 }} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-green-300 rounded-[10px] outline-none  ${styles}`}>
    Get Started 
  </motion.button></Link >
);

export default Button;
