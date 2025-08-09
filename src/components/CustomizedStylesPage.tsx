import SharedTypography from "./shared/SharedTypography";
import SharedButton from "./shared/SharedButton";
import SharedCard from "./shared/SharedCard";
import { useNavigate } from "react-router-dom";
import SharedBreadcrumb from "./shared/SharedBreadcrumb";
import { ConfigProvider } from "antd";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";
import { darkTheme, lightTheme } from "../configs/themePresets";

const breadcrumbItems = [
  {
    title: "Home",
  },
  {
    title: <a href="/custom-styles">Custom Styles</a>,
  },
];

// Special theme just for this page
const specialTheme = {
  components: {
    Button: {
      fontSize: 16,
      borderRadius: 15,
      colorBgContainer: "#B95929", //copper
      colorText: "#ECDDD5", //cream
    },
  },
};

const CustomizedStylesPage = () => {
  const [isDarkBreadcrumb, setIsDarkBreadcrumb] = useState<boolean>(false);
  const [themeType, setThemeType] = useState<string>('light');
  
    const navigate = useNavigate();

  //update theme for breadcrumbs
  const { updateTheme, setComponentTheme, resetComponentTheme } = useTheme();

  const switchToDarkBreadcrumbs = () => {
    updateTheme({
      components: {
        Breadcrumb: {
          fontSize: 16,
          linkColor: "#ECDDD5",
          separatorColor: "#B95929",
          lastItemColor: "#ECDDD5",
          linkHoverColor: "white"
        },
      },
    });
    setIsDarkBreadcrumb(true);
  };

  // const switchToLargeBreadcrumbs = () => {
  //   updateTheme({
  //     components: {
  //       Breadcrumb: {
  //         fontSize: 20,
  //         // linkColor: "#ff4500",
  //       },
  //     },
  //   });
  //   setIsDarkBreadcrumb(false);
  // };
  
  const switchToLargeBreadcrumbs = () => {
    setComponentTheme('Breadcrumb', {
      fontSize: 20,
    });
    setIsDarkBreadcrumb(false);
  };

  
  const switchToDarkMode = () => {
    updateTheme(darkTheme)
    setThemeType('dark');
  }
  const switchToLightMode = () => {
    updateTheme(lightTheme)
    setThemeType('light');
  }

  return (
    <div className="flex flex-col justify-start items-center gap-3 w-full min-h-screen bg-cream">
      <div className="flex flex-row justify-end items-start w-full p-4 gap-2">
        <SharedButton onClick={themeType == 'light' ? switchToDarkMode : switchToLightMode}>{themeType == 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</SharedButton>
        <SharedBreadcrumb items={breadcrumbItems} />
        <SharedButton onClick={() => navigate("/")}>Back to Home</SharedButton>
      </div>
      <div className="flex flex-col grow justify-start items-start gap-2">
        <SharedTypography
          isTitle
          level={1}
          className="font-bold !text-wine !text-5xl"
        >
          You can Customize Styles
        </SharedTypography>
        <SharedTypography isTitle level={3} className="font-bold !text-rose">
          Buttons
        </SharedTypography>
        <div className="flex flex-col w-auto gap-2 mb-11">
          <SharedTypography isTitle level={5} className="font-bold !text-rose">
            Default Button
          </SharedTypography>
          <SharedButton
            onClick={() => alert("You clicked a button with default styles")}
          >
            Default Button
          </SharedButton>
        </div>
        <div className="flex flex-col w-auto gap-2 mb-11">
          <SharedTypography isTitle level={5} className="font-bold !text-rose">
            Specific Button
          </SharedTypography>
          <ConfigProvider theme={specialTheme}>
            <SharedButton
              onClick={() =>
                alert("You clicked a button with specific styles for this page")
              }
            >
              Specific Button
            </SharedButton>
          </ConfigProvider>
        </div>
        <SharedTypography isTitle level={3} className="font-bold !text-rose">
          Breadcrumbs
        </SharedTypography>
        <div className={isDarkBreadcrumb ? 'bg-black' : ''}>
        <SharedBreadcrumb items={breadcrumbItems} />

        </div>
        <div className="flex flex-col w-auto gap-2 mb-11">
          <SharedButton onClick={() => {
            resetComponentTheme("Breadcrumb");
            setIsDarkBreadcrumb(false);
          }}>
            Switch to Default Breadcrumbs
          </SharedButton>
          <SharedButton onClick={switchToDarkBreadcrumbs}>
            Switch to Dark Breadcrumbs
          </SharedButton>
          <SharedButton onClick={switchToLargeBreadcrumbs}>
            Switch to Large Breadcrumbs
          </SharedButton>
        </div>
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

export default CustomizedStylesPage;
