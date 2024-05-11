import ThemeCard from "../../components/card/ThemeCard";
import { useAppDispatch, useAppSelector } from "../../hooks/type_hooks";
import { changeTheme } from "../../redux/reducer";
import { themes } from "../../utils/constants/constants";
import { ThemePropTypes } from "../../utils/types/types";

const ThemePage = () => {
  const { theme } = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const switchTheme = (theme: ThemePropTypes, isDark: boolean) => {
    dispatch(changeTheme({ isDark, theme }));
  };

  return (
    <div className="">
      <h1 className={`${theme.text_color} text-3xl font-semibold`}>Themes</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ThemeCard
          color="bg-slate-100"
          label="light"
          textColor="text-black"
          onClick={() => switchTheme(themes.lightPalette, false)}
        />
        <ThemeCard
          color="bg-[#091A32]"
          label="Dark Blue"
          onClick={() => switchTheme(themes.darkPalette, true)}
        />
        <ThemeCard
          color="bg-[#12D2ED]"
          label="Yellow"
          onClick={() => switchTheme(themes.aqua, true)}
        />
        <ThemeCard
          color="bg-[#D02FA4]"
          label="Glass"
          onClick={() => switchTheme(themes.glass, true)}
        />
      </div>
    </div>
  );
};

export default ThemePage;
