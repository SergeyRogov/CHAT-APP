import { formatTime, cutLongWords } from "../lib/utils";
import { useAuthStore } from "../store/useAuthStore";

const MessageCard = ({ message }) => {
  const { authUser } = useAuthStore();

  return message.senderId == authUser._id ? (
    <div className="w-full h-fit flex justify-end">
      <div className="w-56 h-full flex flex-col items-end gap-2">
        <div className="min-w-32 min-h-8 pl-2 pr-4 pt-1 flex-col bg-base-100 rounded-2xl rounded-br-none">
          <p className="w-full h-fit text-balance pr-2">
            {cutLongWords(message.text)}
          </p>
          <div className="w-full flex justify-end">
            <img
              src={message.image}
              className={`${
                !message.image && "hidden"
              } size-32 object-cover m-3 mr-2 rounded-lg`}
            />
          </div>

          <time className="w-full h-6 pl-2 flex items-center justify-end rounded-2xl text-xs">
            {formatTime(message.createdAt)}
          </time>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-fit flex justify-start">
      <div className="w-56 h-full flex flex-col items-start gap-2">
        <div className="min-w-32 min-h-8 pl-2 pr-4 pt-1 bg-base-100 rounded-2xl rounded-bl-none">
          <p className="w-full h-fit text-balance pl-2">
            {cutLongWords(message.text)}
          </p>
          <div className="w-full flex justify-start">
            <img
              src={message.image}
              className={`${
                !message.image && "hidden"
              } size-32 object-cover m-3 ml-2 rounded-lg`}
            />
          </div>
          <time className="w-full h-6 pr-2 flex items-center justify-end rounded-2xl text-xs">
            {formatTime(message.createdAt)}
          </time>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
