import { useAppSelector } from "../hooks/type_hooks";

const Page = ({ name }: { name: string }) => {
  const theme = useAppSelector(({ theme: { theme } }) => theme);

  return (
    <div className="">
      <h1 className={`${theme.text_color} text-3xl capitalize font-semibold`}>
        {name}
      </h1>
      <div
        className={`${theme.text_color} min-h-screen fully-center lowercase`}
      >
        Your {name} page
      </div>
    </div>
  );
};

export default Page;
