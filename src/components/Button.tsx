export default function Button({ children }: ButtonProps) {
  return (
    <a href="https://partyrock.aws/u/parambirje/t--nDqgdb/Parable-Rhythm">
      <button className="text-lg font-medium px-5 py-2 bg-white text-black rounded-sm normal-case hover:scale-105 duration-200">
        <p>{children}</p>
      </button>
    </a>
  );
}

type ButtonProps = {
  children: React.ReactNode;
};
