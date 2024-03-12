import { useState } from "react";
import Navbar from "./Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import Code from "./Code";

export default function Home() {
  const [isAddCodeOpen, setIsCodeOpen] = useState(false);
  const openCode = () => setIsCodeOpen(true);
  const closeCode = () => setIsCodeOpen(false);
  return (
    <div>
      <Navbar />
      <div className="fixed bottom-20 lg:left-[50rem] left-0 right-0 flex justify-center mb-4">
        <button onClick={openCode}>
          <AiOutlinePlus className="text-teal-500 text-5xl border rounded-full bg-white" />
        </button>
        <Code isOpen={isAddCodeOpen} handleClose={closeCode} />
      </div>
    </div>
  );
}
Home.js;
