import SharedTypography from "./shared/SharedTypography";
import SharedButton from "./shared/SharedButton";
import SharedCard from "./shared/SharedCard";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start items-center gap-3 w-full min-h-screen bg-cream">
      <div className="flex flex-row justify-end items-start w-full p-4">
        <SharedButton onClick={() => navigate("/about")}>About</SharedButton>
      </div>
      <div className="flex flex-col grow justify-center items-center gap-2">
        <SharedTypography
          isTitle
          level={1}
          className="font-bold !text-wine !text-5xl"
        >
          React with Ant Design
        </SharedTypography>
        <h1 className=" text-cream bg-wine">This headline will use Poppins.</h1>
        <div className="flex flex-row gap-3 justify-around items-center">
          <SharedCard className="flex flex-col justify-center items-center h-40 !bg-rose hover:!rounded-2xl hover:cursor-pointer hover:!border-8 hover:!border-rose hover:!bg-copper">
            Customizing Styles with Ant Design
          </SharedCard>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
