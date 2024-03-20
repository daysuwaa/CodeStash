/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination} className=" py-1 rounded-lg w-fit">
        <IoIosArrowRoundBack className="text-blue-900 text-5xl cursor-pointer hover:text-blue-300" />
      </Link>
    </div>
  );
};
BackButton.propTypes = {
  destination: PropTypes.string,
};
export default BackButton;
