import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <ScaleLoader height={55} width={6} radius={50} color="#FF5F00"/>
    </div>
  );
};

export default Loading;
