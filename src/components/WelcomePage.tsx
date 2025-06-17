import SharedTypography from "./shared/SharedTypography";
import SharedButton from "./shared/SharedButton";
import SharedCard from "./shared/SharedCard";



const WelcomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 min-h-screen bg-cream">
      <SharedTypography
        isTitle
        level={1}
        className="font-bold !text-wine !text-5xl"
      >
        Welcome React with Ant Design
      </SharedTypography>
      <SharedButton>Button</SharedButton>
      <h1 className=" text-cream bg-wine">This headline will use Poppins.</h1>
      <div className="flex flex-row gap-3 justify-around items-center">
        
        <SharedCard className="flex flex-col justify-center items-center h-40 !bg-rose hover:!rounded-2xl hover:cursor-pointer hover:!border-8 hover:!border-rose hover:!bg-copper">
          Customizing Styles with Ant Design
        </SharedCard>
      </div>
    </div>
  );
};

export default WelcomePage;
