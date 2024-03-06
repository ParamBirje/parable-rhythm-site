export default function Button({ children, href }: ButtonProps) {
  return (
    <a href={href}>
      <button className="text-lg font-medium px-5 py-2 bg-white text-black rounded-sm normal-case">
        <p>{children}</p>
      </button>
    </a>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};
