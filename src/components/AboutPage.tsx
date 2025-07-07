import SharedTypography from "./shared/SharedTypography";
import SharedButton from "./shared/SharedButton";
import SharedCard from "./shared/SharedCard";
import { useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";

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

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-start items-center gap-3 w-full min-h-screen bg-cream py-6 px-5">
      <div className="flex flex-row justify-end items-start w-full p-4">
        <ConfigProvider theme={specialTheme}>
          <SharedButton onClick={() => navigate("/")}>
            Back to home
          </SharedButton>
        </ConfigProvider>
      </div>
      <SharedTypography
        isTitle
        level={1}
        className="font-bold !text-wine !text-5xl"
      >
        About the App
      </SharedTypography>
      <SharedCard className="w-2/3 flex !flex-col grow !gap-3 justify-center items-start h-auto !bg-rose hover:!rounded-2xl hover:cursor-pointer !border-8 hover:!border-wine hover:!bg-rose">
        <SharedTypography className="!text-cream !text-base">
          Welcome to our application, a modern web solution built with React and
          styled beautifully using Ant Design. Our goal is to deliver a seamless
          and responsive user experience with the power of component-based
          development and sleek UI design. This app is developed using React, a
          robust JavaScript library that allows us to build highly interactive,
          fast, and scalable user interfaces. React's component-based structure
          makes the development process efficient and maintainable, especially
          for dynamic, data-driven applications.
        </SharedTypography>
        <SharedTypography className="!text-cream !text-base">
          To complement React’s functionality, we use Ant Design, a widely
          adopted UI framework that provides a rich set of high-quality
          components out of the box. From forms and tables to modals and
          navigation menus, Ant Design allows us to maintain visual consistency
          and adhere to modern design principles without reinventing the wheel.
        </SharedTypography>
        <SharedTypography className="!text-cream !text-base">
          By combining the flexibility of React with the elegance of Ant Design,
          we’ve created an interface that is both intuitive and professional —
          making it easy for users to navigate, interact, and engage with the
          features of our app. Whether you're managing data, browsing content,
          or interacting with forms, we aim to offer a smooth and responsive
          experience across all devices.
        </SharedTypography>
      </SharedCard>
    </div>
  );
};

export default AboutPage;
