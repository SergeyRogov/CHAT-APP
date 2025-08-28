import { Image, SendHorizonal, X } from "lucide-react";
import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      return toast.error("Please provide an image file");
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="w-full h-fit">
      {imagePreview && (
        <div className="w-full h-32 p-4 flex">
          <img
            src={imagePreview}
            alt="image preview"
            className="size-24 object-cover rounded-lg"
          />
          <button
            className="size-6 relative flex justify-center items-center top-0 right-6 bg-base-100 rounded-bl-lg"
            onClick={removeImage}
          >
            <X className="text-primary" />
          </button>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="w-full h-fit min-h-20 flex items-center gap-1 sm:gap-3 border-t-2 border-base-100 p-2 sm:py-6"
      >
        <input
          type="text"
          placeholder="Type a message"
          className="w-4/5 h-3/5 sm:h-12 bg-base-300 border-2 rounded-lg p-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageSelect}
        />
        <button
          className="hidden w-10 h-3/5 sm:size-12 sm:flex justify-center items-center hover:bg-base-100 rounded-lg"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          <Image className="size-7" />
        </button>
        <button
          type="submit"
          className={`w-10 h-3/5 sm:size-12 flex justify-center items-center hover:bg-base-100 rounded-lg `}
          disabled={!text.trim() && !imagePreview}
        >
          <SendHorizonal
            className={`size-7 ${
              !text.trim() && !imagePreview ? "opacity-40" : "opacity-100"
            }`}
          />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
