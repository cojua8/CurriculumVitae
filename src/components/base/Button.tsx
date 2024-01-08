import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return (
    <div className="cursor-pointer bg-blue-300 hover:bg-blue-600 p-2 first:rounded-tl-xl  last:rounded-bl-xl">
      {children}
    </div>
  );
};

export default Button;
