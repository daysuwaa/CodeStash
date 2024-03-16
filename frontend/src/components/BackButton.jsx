/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import PropTypes from "prop-types";

const BackButton = ({ destination = "/" }) => {
  return (
    <div>
      <Link to={destination} className=" px-4 py-1 rounded-lg w-fit">
        <SlArrowLeft className="text-teal-500" />
      </Link>
    </div>
  );
};
BackButton.propTypes = {
  destination: PropTypes.string,
};
export default BackButton;
