import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profileImg: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto p-2 px-8">
        <div className="bg-base-300 rounded-xl p-4 md:p-6 space-y-2 md:space-y-8">
          <div className="text-center text-primary">
            <h1 className="text-xl font-semibold">Profile</h1>
            <p className="mt-2 text-sm">Your profile preferences</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={
                    selectedImage ||
                    authUser.profileImg ||
                    "/images/profileImage.webp"
                  }
                  alt="Profile image"
                />
              </div>
              <label
                htmlFor="avatar-upload"
                className={`size-9 hover:scale-110 flex justify-center items-center absolute bottom-0 right-0 bg-primary rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="size-5" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <div>
              <h3 className="text-sm">
                {isUpdatingProfile
                  ? "Uploading..."
                  : "Click camera button to update profile image"}
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-1">
                <User className="size-5 text-base-content/40" />
                <label className="label">
                  <span className="label-text font-medium">Full name</span>
                </label>
              </div>
              <div className="h-10 border-double border-4 rounded-lg">
                <h3 className="text-primary pl-4 py-1">{authUser?.fullName}</h3>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-1">
                <Mail className="size-5 text-base-content/40" />
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
              </div>
              <div className="h-10 border-double border-4 rounded-lg">
                <h3 className="text-primary pl-4 py-1">{authUser?.email}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-base-300 rounded-xl mt-4 p-4 md:p-6 space-y-2">
          <h3 className="text-primary font-bold md:text-lg">
            Account information
          </h3>
          <div className="flex justify-between">
            <h3 className="text-primary">Joined since</h3>
            <h3 className="text-sm">{authUser?.createdAt.split("T")[0]}</h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-primary">Account status</h3>
            <h3 className="text-sm text-green-400">Online</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
