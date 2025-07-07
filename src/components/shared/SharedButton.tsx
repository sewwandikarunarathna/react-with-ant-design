// src/components/shared/SharedButton.tsx
import { Button } from "antd";

interface AntProps  {
  type?: "default" | "primary" | "dashed" | "link" | "text";
  size?: "small"| 'middle' | "large";
  variant?: "text" | "outlined" | "contained" | any;
  icon?: any;
  className?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  children?: any;
  disabled?: boolean;
  onClick?: any;
};

const SharedButton = (props: AntProps) => {
  return (
    <>
      <Button
        type={props.type}
        icon={props.icon}
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.className}
        size={props.size}
        variant={props.variant}
        htmlType={props.htmlType}
      >
        {props.children}
        </Button>
    </>
  );
};

export default SharedButton;
