// src/components/shared/SharedBreadcrumb.tsx
import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export interface BreadcrumbItem {
  title: React.ReactNode;
  path?: string;
}

interface SharedBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const SharedBreadcrumb: React.FC<SharedBreadcrumbProps> = ({
  items,
  className,
}) => {
  // Access the theme context
  const { theme } = useTheme();

  // We can use theme values if needed
  console.log("Current breadcrumb theme:", theme.components?.Breadcrumb);

  return (
    <Breadcrumb
      className={className}
      separator="›"
      style={{
        color: theme.components?.Breadcrumb?.lastItemColor, // We can customize by using theme styles
        fontSize: theme.components?.Breadcrumb?.fontSize,
      }}
    >
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <Link
              to={item.path}
              style={{
                color: theme.components?.Breadcrumb?.lastItemColor,
                background: theme.components?.Breadcrumb?.separatorColor,
                textDecoration: "none",
                
              }}
            >
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default SharedBreadcrumb;
