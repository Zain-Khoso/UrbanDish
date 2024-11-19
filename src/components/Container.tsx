// Types.
type Props = {
  children?: React.ReactNode;
};

// Max width component for the entire app.
export default function Container({ children }: Props) {
  return <div className="mx-auto w-full max-w-[1440px] px-4">{children}</div>;
}
