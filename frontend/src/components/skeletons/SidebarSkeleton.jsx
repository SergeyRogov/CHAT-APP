import UserSkeleton from "./UserSkeleton";

const SidebarSkeleton = () => {
  const countLines = window.innerHeight / 130;

  return (
    <div className="col-span-3 flex flex-col overflow-y-auto border-r-2 border-base-100 animate-pulse">
      <div className="sticky top-0 left-0 w-full h-24 flex flex-col gap-2 p-3 py-5 bg-base-300 rounded-t-lg border-b-2 border-base-100">
        <div className="w-1/2 h-4 flex gap-2 bg-base-100 rounded-lg"></div>
        <div className="w-3/4 h-4 flex gap-2 bg-base-100 rounded-lg"></div>
      </div>
      <div className="overflow-y-auto">
        {Array.from({ length: countLines }, (_, key) => (
          <UserSkeleton key={key} isDescriptive={false} />
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;
