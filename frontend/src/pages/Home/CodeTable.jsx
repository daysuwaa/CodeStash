/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const CodeTable = ({ codeList }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md-hidden">
            Code
          </th>
          <th className="border border-slate-600 rounded-md max-md-hidden">
            language
          </th>
          <th className="border border-slate-600 rounded-md">operations</th>
        </tr>
      </thead>
      <tbody>
        {codeList.map((code, index) => (
          <tr key={code._id} className="h-8">
            <td className="border border-slate-700 rounded-md">{index + 1}</td>
            <td className="border border-slate-700 rounded-md">{code.title}</td>
            <td className="border border-slate-700 rounded-md max-md-hidden">
              {code.code}
            </td>
            <td className="border border-slate-700 rounded-md max-md-hidden">
              {code.language}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/codes/edit/${code._id}`}>
                  <AiOutlineEdit className="text-green-500 text-2xl border rounded-full bg-white" />
                </Link>
                <Link to={`/codes/details/${code._id}`}>
                  <BsInfoCircle className="text-black text-2xl border rounded-full bg-white" />
                </Link>
                <Link to={`/codes/delete/${code._id}`}>
                  <MdOutlineDelete className="text-red-500 text-2xl border rounded-full bg-white" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
// CodeTable.PropTypes = {
//   codeList: PropTypes.string,
// };

export default CodeTable;
