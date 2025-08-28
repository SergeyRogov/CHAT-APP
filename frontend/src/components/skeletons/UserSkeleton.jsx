const UserSkeleton = ({ isDescriptive }) => {
  return (
    <div className="p-3">
      <div className="w-full h-16 p-3 flex items-center gap-3">
        <div className="relative mx-auto lg:mx-0">
          <div className="size-12 object-cover bg-base-100 rounded-full" />
        </div>
        <div
          className={
            isDescriptive
              ? "flex w-full h-12 flex-col justify-around gap-1"
              : "hidden md:flex w-full h-12 flex-col justify-around gap-1"
          }
        >
          <div className="w-3/4 h-3 font-bold text-primary bg-base-100 rounded-lg"></div>
          <div className="w-2/5 h-3 font-bold text-primary bg-base-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
