/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { GoCopy } from "react-icons/go";
const CopyToClipboard = ({ textToCopy }) => {
  const handleCopyToClipboard = (textToCopy) => {
    toast("Copied to clipboard!", {
      id: "copyy",
    });

    if (navigator.clipboard) return navigator.clipboard.writeText(textToCopy);
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = textToCopy;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="text-end">
      <button
        className="rounded  text-black "
        onClick={() => handleCopyToClipboard(textToCopy)}
      >
        <GoCopy className="text-2xl  " />
      </button>
      <Toaster />
    </div>
  );
};

export default CopyToClipboard;
