const MessageSkeleton = ({ isLeft }) => {
  return isLeft ? (
    <div className={`w-full h-28 flex justify-start`}>
      <div className="w-56 h-full flex flex-col items-start gap-2">
        <div className="w-28 h-4 bg-base-100 rounded-2xl"></div>
        <div className="w-56 h-16 bg-base-100 rounded-2xl rounded-bl-none"></div>
      </div>
    </div>
  ) : (
    <div className={`w-full h-28 flex justify-end`}>
      <div className="w-56 h-full flex flex-col items-end gap-2">
        <div className="w-28 h-4 bg-base-100 rounded-2xl"></div>
        <div className="w-56 h-16 bg-base-100 rounded-2xl rounded-br-none"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
