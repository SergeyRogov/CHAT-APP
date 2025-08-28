const AuthImage = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:block bg-[url('/authImage.jpg')] bg-cover bg-top text-center">
      <div className="min-h-screen mix-blend-color bg-primary/100"></div>
      <div className="absolute w-1/2 top-8 right-0">
        <h1 className="text-xl font-bold text-white/80">{title}</h1>
        <h2 className="mt-3 text-md italic text-white/80">{subtitle}</h2>
      </div>
    </div>
  );
};

export default AuthImage;
