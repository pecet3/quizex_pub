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
