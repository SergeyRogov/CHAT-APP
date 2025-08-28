import MessageSkeleton from "./MessageSkeleton";
import UserSkeleton from "./UserSkeleton";

const ChatContainerSkeleton = () => {
  const countLines = window.innerHeight / 180;

  return (
    <div className="w-full h-full overflow-y-auto p-4 space-y-4">
      {Array.from({ length: countLines }, (_, key) => (
        <MessageSkeleton key={key} isLeft={key % 2 === 0} />
      ))}
    </div>
  );
};

export default ChatContainerSkeleton;
