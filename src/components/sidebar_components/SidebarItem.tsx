import { PropsWithChildren } from "react";

interface SidebarItemProps {
  title?: string;
}

const SidebarItem = ({
  title,
  children,
}: PropsWithChildren<SidebarItemProps>) => {
  if (!children) {
    return null;
  }

  return (
    <div className="mb-5">
      {title ? (
        <div className="mb-2">
          <div className="font-bold text-2xl">{title}</div>
          <hr />
        </div>
      ) : null}
      <div className="ml-2">{children}</div>
    </div>
  );
};

export default SidebarItem;
