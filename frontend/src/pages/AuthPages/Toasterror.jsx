import { toast } from "react-hot-toast";

function MyComponent() {
  const handleShowErrorToast = () => {
    toast.error("An error occurred!");
  };

  return (
    <div>
      <button onClick={handleShowErrorToast}>Show Error Toast</button>
    </div>
  );
}

export default MyComponent;
