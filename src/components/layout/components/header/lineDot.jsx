const LineDot = ({className}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-full flex items-center">
        <div className="w-full h-[2.4px] bg-gradient-to-r from-transparent via-[#d8bf8c] to-transparent" />
        <div className="absolute left-1/2 ml-[-2.5px] w-[5px] h-[5px] bg-[#C9A45C] rotate-45 border border-[#B88E3C]" />
      </div>
    </div>
  );
};

export default LineDot;