import { useThemeStore } from "../store/useThemeStore";

const ThemeCard = ({ theme, isActive }) => {
  const { setTheme } = useThemeStore();

  return (
    <button
      data-theme={theme}
      className={`${
        isActive ? "border-4 border-primary" : ""
      } h-28 rounded-xl flex bg-base-100`}
      onClick={() => setTheme(theme)}
    >
      <div className="w-1/5 h-full flex flex-col rounded-xl">
        <div className="w-full h-2/3 rounded-l-xl rounded-bl-none bg-base-200"></div>
        <div className="w-full h-1/3 rounded-bl-xl bg-base-300"></div>
      </div>
      <div className="w-2/3 h-full flex flex-col gap-1 p-2 lg:p-3 pt-1">
        <p className="text-start font-bold">{theme}</p>
        <div className="grid lg:grid-cols-3 grid-cols-2 grid-rows-2 lg:gap-3 gap-1 text-center">
          <div className="text-primary-content bg-primary rounded-md">A</div>
          <div className="text-secondary-content bg-secondary rounded-md">
            A
          </div>
          <div className="text-accent-content bg-accent rounded-md">A</div>
          <div className="text-neutral-content bg-neutral rounded-md">A</div>
        </div>
      </div>
    </button>
  );
};

export default ThemeCard;
