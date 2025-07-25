export const PaperWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="paper paper-yellow  
       shadow-lg shadow-gray-100 w-full sm:max-w-lg max-w-md"
    >
      <div className="tape-section"></div>
      {children}
      <div className="tape-section"></div>
    </div>
  );
};
export const LittlePaperWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="paper paper-yellow m-auto
       shadow-md shadow-gray-100 max-w-sm"
    >
      <div className="top-tape"></div>
      <div className="pt-10 p-2"> {children}</div>
    </div>
  );
};

export const LittlePaperBlueWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="paper paper-blue 
       shadow-lg shadow-gray-100 "
    >
      <div className="top-tape"></div>
      <div className="pt-10 p-2"> {children}</div>
    </div>
  );
};
export const PatternWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="paper m-0
       w-full  sm:max-w-lg max-w-md"
    >
      <div className="tape-section"></div>

      {children}
      <div className="tape-section"></div>
    </div>
  );
};
