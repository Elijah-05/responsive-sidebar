import { useAppSelector } from "../../hooks/type_hooks";

const Avatar = ({
  src,
  isCollapsed,
}: {
  src: string;
  isCollapsed: boolean;
}) => {
  const currentTheme = useAppSelector(({ theme: { theme } }) => theme);

  return (
    <div className="group relative shrink-0 w-[70px] h-[70px] fully-center rounded-full shadow-sm mb-2">
      <img
        src={src}
        className="w-14 rounded-full h-14 object-cover"
        alt="user profile"
      />
      <div
        className={`absolute -z-10 w-full h-full ${
          isCollapsed ? "rotate-0" : "rotate-[360deg]"
        } rounded-full p-[2px] right-0 bottom-0 ${
          currentTheme.profile_ring
        } transition-all duration-1000`}
      >
        <div
          className={`${currentTheme.sidebar_bg} w-full h-full rounded-full`}
        />
      </div>
      <div className="absolute top-1 right-1 translate-y- w-3 h-3 bg-green-400 shrink-0 rounded-full" />
    </div>
  );
};

export default Avatar;
