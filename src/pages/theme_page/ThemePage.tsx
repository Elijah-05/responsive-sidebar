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
          color="bg-[#38b000]"
          label="Green"
          onClick={() => switchTheme(themes.green, false)}
        />
        <ThemeCard
          color="bg-[#02c39a]"
          label="Turquoise"
          onClick={() => switchTheme(themes.turquoise, false)}
        />
        <ThemeCard
          color="bg-[#12D2ED]"
          label="Light Cyan"
          onClick={() => switchTheme(themes.aqua, false)}
        />
        <ThemeCard
          color="bg-[#ff4d6d]"
          label="Coral Pink"
          onClick={() => switchTheme(themes.coralPink, false)}
        />
        <ThemeCard
          color="bg-[#fb5607]"
          label="Orange"
          onClick={() => switchTheme(themes.orange, false)}
        />
        <ThemeCard
          color="bg-[#5a189a]"
          label="Violet"
          onClick={() => switchTheme(themes.violet, true)}
        />
        <ThemeCard
          color="bg-[#091A32]"
          label="Dark Blue"
          onClick={() => switchTheme(themes.darkBlue, true)}
        />
        <ThemeCard
          color="bg-slate-50 bg-opacity-20"
          label="Glass"
          onClick={() => switchTheme(themes.glass, false)}
        />
      </div>
    </div>
  );
};

export default ThemePage;
