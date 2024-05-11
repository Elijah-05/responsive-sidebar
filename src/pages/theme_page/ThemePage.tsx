import ThemeCard from "../../components/card/ThemeCard";
import { useAppDispatch, useAppSelector } from "../../hooks/type_hooks";
import { changeTheme } from "../../redux/reducer";
import { themes } from "../../utils/constants/constants";
import { ThemePropTypes } from "../../utils/types/types";

const ThemePage = () => {
  const currentTheme = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const switchTheme = (theme: ThemePropTypes) => {
    dispatch(changeTheme(theme));
  };

  return (
    <div className="">
      <h1 className={`${currentTheme.light_text} text-3xl font-semibold`}>
        Themes
      </h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ThemeCard
          color="bg-slate-100"
          label="light"
          textColor="text-black"
          onClick={() => switchTheme(themes.lightPalette)}
        />
        <ThemeCard
          color="bg-green-500"
          label="Yellow"
          onClick={() => switchTheme(themes.darkPalette)}
        />
        <ThemeCard
          color="bg-yellow-500"
          label="Yellow"
          onClick={() => switchTheme(themes.darkPalette)}
        />
        <ThemeCard
          color="bg-black"
          label="Yellow"
          onClick={() => switchTheme(themes.darkPalette)}
        />
        <ThemeCard
          color="bg-red-400"
          label="Orange"
          onClick={() => switchTheme(themes.darkPalette)}
        />
        <ThemeCard
          color="bg-blue-500"
          label="Yellow"
          onClick={() => switchTheme(themes.darkPalette)}
        />
      </div>
    </div>
  );
};

export default ThemePage;
