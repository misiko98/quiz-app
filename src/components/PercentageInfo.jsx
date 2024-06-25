const PercentageInfo = ({ percentage, label }) => {
  return (
    <p className="flex-1 flex flex-col text-center">
      <span className="number font-roboto text-5xl text-[#594276]">
        {`${percentage}%`}
      </span>
      <span className="text font-roboto uppercase text-sm text-[#30273a] mt-[-0.5rem] ml-[0.2rem] tracking-[0.1rem]">
        {label}
      </span>
    </p>
  );
};

export default PercentageInfo;
