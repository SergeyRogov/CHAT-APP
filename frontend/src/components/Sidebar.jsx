import { UsersRound } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect, useState } from "react";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const Sidebar = () => {
  const { onlineUsers } = useAuthStore();
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  const filteredUsers = users.filter(
    (user) => !showOnlineUsers || onlineUsers.includes(user._id)
  );

  return (
    <div className="col-span-3 flex flex-col overflow-y-auto border-r-2 border-base-100">
      <div className="sticky top-0 left-0 w-full h-24 flex flex-col gap-2 p-3 pb-5 bg-base-300 rounded-t-lg">
        <div className="flex gap-2 text-primary">
          <UsersRound />
          <p>Contacts</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="checkbox size-[18px]"
            checked={showOnlineUsers}
            onChange={(e) => setShowOnlineUsers(e.target.checked)}
          />
          <p className="hidden md:block text-sm text-primary tracking-wider">
            Show online only ({onlineUsers.length - 1} online)
          </p>
          <p className="md:hidden block text-sm text-primary tracking-wider">
            Online
          </p>
        </div>
      </div>
      <div className="overflow-y-auto">
        <div className="p-3 border-t-2 border-base-100">
          {filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full p-3 flex items-center gap-3 hover:bg-base-100 transition-colors ${
                selectedUser?._id === user?._id
                  ? "bg-base-100 ring-1 ring-base-300"
                  : ""
              }`}
            >
              <div className="relative lg:mx-0">
                <img
                  src={user.profileImg || "/images/profileImage.webp"}
                  alt={user.fullName}
                  className="size-12 object-cover rounded-full"
                />
                {onlineUsers.includes(user._id) && (
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
                )}
              </div>
              <div className="hidden sm:block text-left">
                <p className="font-bold text-primary text-xs md:text-sm">
                  {user.fullName}
                </p>
                {onlineUsers.includes(user._id) ? (
                  <p className="text-sm text-green-500">Online</p>
                ) : (
                  <p className="text-sm text-base-content">Offline</p>
                )}
              </div>
            </button>
          ))}
          {!filteredUsers.length && (
            <div className="flex flex-col justify-center items-center">
              No online users
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
