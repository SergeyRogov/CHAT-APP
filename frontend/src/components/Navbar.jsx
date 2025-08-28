import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    authUser !== null && (
      <header className="w-full h-16 bg-base-100 border-b border-base-300 fixed top-0 z-40 backdrop-blur-lg bg-base-100/80">
        <div className="container mx-auto px-4 h-16">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2.5 hover:opacity-80 transition-all"
              >
                <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="size-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">Chat app</h1>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                to="/settings"
                className="btn btn-sm gap-2 transition-colors"
              >
                <Settings className="size-4" />
                <span className="hidden sm:inline text-base-content font-bold">
                  Settings
                </span>
              </Link>
              <Link to="/profile" className="btn btn-sm gap-2">
                <User className="size-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button className="flex gap-2 items-center" onClick={logout}>
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Navbar;
