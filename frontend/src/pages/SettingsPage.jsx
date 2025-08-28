import { THEMES } from "../constants";
import ThemeCard from "../components/ThemeCard";
import { useThemeStore } from "../store/useThemeStore";
import { SendHorizonal } from "lucide-react";

const SettingsPage = () => {
  const { theme } = useThemeStore();

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center xl:pt-0 pt-16">
      <div className="lg:w-3/5 w-[90%] h-full flex flex-col py-5 gap-6">
        <div className="text-primary">
          <h1 className="font-bold text-lg">Themes</h1>
          <p>Choose theme style which you like</p>
        </div>
        <div className="w-full h-2/5 grid grid-cols-3 grid-rows-2 gap-2 lg:gap-8 lg:gap-x-12">
          {THEMES.map((t, i) => (
            <ThemeCard theme={t} isActive={t == theme} key={i} />
          ))}
        </div>
        <div className="mt-5 bg-base-100">
          <p className="font-bold text-lg text-primary">Preview</p>
        </div>
        <div className="lg:w-full min-h-3/5 flex flex-col p-3 gap-1 bg-base-300 rounded-xl">
          <div className="w-full h-full flex justify-center items-center rounded-xl">
            <div className="w-full lg:w-3/4 h-full bg-base-100 flex flex-col p-3 gap-2 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="text-center size-10 rounded-full bg-primary font-semibold text-3xl text-primary-content">
                  J
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">John Doe</p>
                  <p>Online</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center rounded-xl">
            <div className="w-full lg:w-3/4 h-full bg-base-100 flex flex-col p-6 gap-2 rounded-xl">
              <div className="flex justify-start">
                <div className="w-fit h-fit p-3 bg-base-300 rounded-xl rounded-bl-none">
                  <p className="font-bold">Hello! How do you do?</p>
                  <p className="text-sm">12:03 PM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="w-fit h-fit p-3 bg-primary text-primary-content rounded-xl rounded-br-none">
                  <p className="font-bold">Hi! I'm fine. Let's go outside?</p>
                  <p className="text-sm">12:05 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center rounded-xl">
            <div className="w-full lg:w-3/4 h-full bg-base-100 flex p-6 gap-2 rounded-xl">
              <div className="w-[90%] h-10 border-2 rounded-lg p-2 py-1.5">
                Preview text
              </div>
              <div className="min-w-14 flex justify-center items-center bg-primary text-primary-content rounded-lg">
                <SendHorizonal className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
