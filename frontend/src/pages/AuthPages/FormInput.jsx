/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Forminput = ({ label, htmlFor, type, value, setValue }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-gray-400 text-sm font-fontfamily5 mb-2"
      >
        {label}

        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="  rounded w-full bg-slate-300 mt-2 py-2 px-3  focus:outline-none focus:border-teal-300 focus:shadow-outline text-gray-700 leading-tight  focus:shadow-outlin"
        />
      </label>
    </div>
  );
};
Forminput.propTypes = {
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Forminput;
