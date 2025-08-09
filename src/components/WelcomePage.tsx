import SharedTypography from "./shared/SharedTypography";
import SharedButton from "./shared/SharedButton";
import SharedCard from "./shared/SharedCard";
import { useNavigate } from "react-router-dom";
import WelcomeCards from "./WelcomeCards";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import { darkTheme, lightTheme } from "../configs/themePresets";

const WelcomePage = () => {
    const [themeType, setThemeType] = useState<string>('light');
  
  const navigate = useNavigate();
const { theme, updateTheme } = useTheme();

const switchToDarkMode = () => {
  updateTheme(darkTheme)
  setThemeType('dark');
}
const switchToLightMode = () => {
  updateTheme(lightTheme)
  setThemeType('light');
}

  return (
    <div style={{backgroundColor: theme.token?.colorBgContainer}} className="flex flex-col justify-start items-center gap-3 w-full min-h-screen">
      <div className="flex flex-row justify-end items-start w-full p-4 gap-2">
        <SharedButton onClick={themeType == 'light' ? switchToDarkMode : switchToLightMode}>{themeType == 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</SharedButton>
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
          {/* <SharedCard className="flex flex-col justify-center items-center h-40 !bg-rose hover:!rounded-2xl hover:cursor-pointer hover:!border-8 hover:!border-rose hover:!bg-copper">
            Customizing Styles with Ant Design
          </SharedCard> */}
          <WelcomeCards />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
