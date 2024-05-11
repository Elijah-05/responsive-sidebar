export interface ThemeCardPropType {
  color: string;
  textColor?: string;
  onClick?: () => void;
  label?: string;
}
const ThemeCard = ({ color, textColor, label, onClick }: ThemeCardPropType) => {
  return (
    <button
      onClick={onClick}
      className={`h-28 grow border-2 active:scale-95 active:shadow-[0px_4px_8px_#00000030] border-[#ffffff90] ${color} rounded-md flex flex-col justify-end items-center duration-300 shadow-[0px_8px_14px_#00000040] hover:shadow-[0px_10px_18px_#00000040] `}
    >
      <p
        className={`text-center drop-shadow-md font-medium mb-2 ${
          textColor || "text-white"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

export default ThemeCard;
