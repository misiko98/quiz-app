import logoImg from '../assets/images/quiz-logo.png';
const Header = () => {
  return (
    <header className="text-center mb-8">
      <img
        src={logoImg}
        alt="quiz logo image"
        className="w-[3rem] h-[3rem] object-contain mx-auto drop-shadow-customBlack"
      />
      <h1 className="uppercase font-bold tracking-[0.6rem] text-[2.5rem] bg-gradient-to-r from-[#e781fb] via-[#e781fb] to-[#8376fa] font-roboto bg-clip-text">
        react Quiz
      </h1>
    </header>
  );
};

export default Header;
