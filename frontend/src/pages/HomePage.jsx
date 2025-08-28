import NoUserSelected from "../components/NoUserSelected";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../store/useChatStore";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-w-screen h-[calc(100vh)] flex justify-center py-[64px] pb-0 lg:py-[88px] lg:pb-10">
      <div className="w-full h-full lg:w-2/3 lg:h-[calc(100vh-144px)] grid grid-cols-10 bg-base-300 rounded-lg shadow-2xl">
        <Sidebar />
        {!selectedUser ? <NoUserSelected /> : <ChatContainer />}
      </div>
    </div>
  );
};

export default HomePage;
