/* eslint-disable react/prop-types */
import CodeSingleCard from "./CodeSingleCard";
const CodeCards = ({ codeList }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {codeList.map((item) => (
        <CodeSingleCard key={item._id} code={item} />
      ))}
    </div>
  );
};

export default CodeCards;
