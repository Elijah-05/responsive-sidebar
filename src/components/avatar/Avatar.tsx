const Avatar = ({ src }: { src: string }) => {
  return (
    <div className="relative w-[70px] h-[70px] fully-center rounded-full ">
      <img
        src={src}
        className="w-14 rounded-full h-14 object-cover"
        alt="user profile"
      />
      <div className="absolute -z-10 w-full h-full rounded-full p-[2px] right-0 bottom-0 bg-gradient-to-tr from-40% from-[rgba(250,250,250,0.3)] to-white">
        <div className="bg-gradient-to-t from-[#08182E] to-[#091A32] w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default Avatar;
