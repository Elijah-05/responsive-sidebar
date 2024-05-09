const Avatar = ({
  src,
  isCollapsed,
}: {
  src: string;
  isCollapsed: boolean;
}) => {
  return (
    <div className="group relative shrink-0 w-[70px] h-[70px] fully-center rounded-full ">
      <img
        src={src}
        className="w-14 rounded-full h-14 object-cover"
        alt="user profile"
      />
      <div
        className={`absolute -z-10 w-full h-full ${
          isCollapsed ? "rotate-0" : "rotate-[360deg]"
        } rounded-full p-[2px] right-0 bottom-0 bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white transition-all duration-1000`}
      >
        <div className="bg-gradient-to-t from-[#08182E] to-[#091A32] w-full h-full rounded-full" />
      </div>
      <div className="absolute top-1 right-1 translate-y- w-3 h-3 bg-green-400 shrink-0 rounded-full" />
    </div>
  );
};

export default Avatar;
