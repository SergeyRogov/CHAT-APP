import { MessageSquare } from "lucide-react";

const NoUserSelected = () => {
  return (
    <div className="flex justify-center items-center col-span-7 rounded-lg rounded-tl-none rounded-bl-none">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="size-12 rounded-lg bg-primary/10 flex justify-center items-center">
          <MessageSquare className="absolute inline-flex size-6 text-primary animate-ping" />
          <MessageSquare className="relative inline-flex size-6 text-primary" />
        </div>
        <p className="w-full px-1 text-lg font-bold text-primary">
          Welcome to chat app!
        </p>
        <p className="w-full px-1 text-primary tracking-wide">
          Select contact from sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoUserSelected;
