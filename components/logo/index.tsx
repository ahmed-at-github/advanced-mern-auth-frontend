import Link from "next/link";

const Logo = (props: { url?: string; size?: string; fontSize?: string }) => {
  const { url = "/", size = "40px", fontSize = "24px" } = props;

  return (
    <>
      <div className="flex items-center justify-center sm:justify-start">
        <Link
          href={url}
          className="rounded-lg flex items-center border-2 dark:border-gray-200 justify-center bg-gradient-to-br from-white-500 to-primary to-50%"
          style={{ width: size, height: size }}
        >
          <span>A</span>
        </Link>
      </div>
    </>
  );
};

export default Logo;
