import { Github, Linkedin, Twitter, WhatsApp } from "../../assets";
import { useAppSelector } from "../../hooks/type_hooks";

const SideBarFooter = ({ isCollapsed }: { isCollapsed: boolean }) => {
  const theme = useAppSelector(({ theme: { theme } }) => theme);

  return (
    <div
      className={`${
        isCollapsed ? "opacity-0 text-[0rem]" : "text-xs opacity-100"
      } absolute shrink-0 left-0 right-0 bottom-4 px-6 ${
        theme.text_color
      } grow transition-all duration-500`}
    >
      <p className=" opacity-50 text-center">
        Design & Developed by{" "}
        <span className={`font-semibold`}>Elyas Abebe</span>
      </p>
      <div
        className={`fully-center ${
          isCollapsed ? "scale-0" : "scale-100"
        } text-sm mt-3 gap-4 opacity-40 duration-300`}
      >
        <Linkedin className="" />
        <Github className="" />
        <Twitter className="" />
        <WhatsApp className="" />
      </div>
    </div>
  );
};

export default SideBarFooter;
