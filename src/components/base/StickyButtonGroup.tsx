import { PropsWithChildren } from "react";

const StickyButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed top-10 right-0 print:hidden">
      <div className="flex flex-col justify-start">{children}</div>
    </div>
  );
};

export default StickyButtonGroup;
