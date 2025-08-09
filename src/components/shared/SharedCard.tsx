import { Card } from "antd";
import { useTheme } from "../../contexts/ThemeContext";

type Props = {
  children: any;
  variant?: "borderless" | "outlined" | any;
  size?: "small" | "default";
  style?: any;
  className?: string;
  title?: string;
  width?: number;
  onClick?: any;
};

const SharedCard = (props: Props) => {
  const { theme } = useTheme();
  
  // Extract primary color from theme
  const primaryColor = theme.token?.colorPrimary || '#1890ff';

  // Create dynamic styles based on theme
  const cardStyle = {
    borderColor: primaryColor,
    borderRadius: theme.token?.borderRadius || 4,
  };

  return (
    <>
      <Card style={{...cardStyle, width: props.width}} onClick={props.onClick} className={props.className} size={props.size ?? 'small'} title={props.title} variant={props.variant}>
        {props.children}
      </Card>
    </>
  );
};

export default SharedCard;
