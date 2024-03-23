/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination} className=" py-1 rounded-lg w-fit">
        <IoIosArrowRoundBack className="dark:text-lime-500 text-black text-5xl cursor-pointer dark:hover:text-lime-300" />
      </Link>
    </div>
  );
};
BackButton.propTypes = {
  destination: PropTypes.string,
};
export default BackButton;
