import SharedTypography from "./shared/SharedTypography";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2 min-h-screen bg-cream">
      <SharedTypography
        isTitle
        italic
        level={1}
        className="font-bold !text-wine !text-5xl"
      >
        404 - Not Found
      </SharedTypography>
    </div>
  );
};

export default NotFoundPage;
