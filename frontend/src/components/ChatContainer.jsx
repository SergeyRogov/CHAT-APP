import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { Image, SendHorizonal, X } from "lucide-react";
import ChatContainerSkeleton from "./skeletons/ChatContainerSkeleton";
import MessageInput from "./MessageInput";
import MessageCard from "./MessageCard";
import { useRef } from "react";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    setSelectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messagesEndRef.current && messages) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="col-span-7 flex flex-col overflow-y-auto rounded-lg rounded-tl-none rounded-bl-none">
      <div className="w-full h-[72px] flex justify-between items-center border-b-2 border-base-100 pl-2 pr-6">
        <div className="w-full p-3 flex items-center gap-3 transition-colors">
          <div className="relative lg:mx-0">
            <img
              src={selectedUser.profileImg || "/images/profileImage.webp"}
              alt={selectedUser.fullName}
              className="size-12 object-cover rounded-full"
            />
            {onlineUsers.includes(selectedUser._id) && (
              <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
            )}
          </div>
          <div className="block text-left">
            <p className="font-bold text-primary">{selectedUser.fullName}</p>
            {onlineUsers.includes(selectedUser._id) ? (
              <p className="text-sm text-green-500">Online</p>
            ) : (
              <p className="text-sm text-base-content">Offline</p>
            )}
          </div>
        </div>
        <button onClick={() => setSelectedUser(null)}>
          <X className="text-primary" />
        </button>
      </div>
      {isMessagesLoading ? (
        <ChatContainerSkeleton />
      ) : (
        <div className="w-full h-full overflow-y-auto p-4 space-y-4">
          {messages.map((message, key) => (
            <MessageCard key={key} message={message} />
          ))}
          <div className="w-full h-0 m-0 p-0" ref={messagesEndRef}></div>
        </div>
      )}
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
