import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/logo-light.svg"
        alt="devX"
        width={100}
        height={40}
        className="h-10"
      />
    </div>
  );
};
