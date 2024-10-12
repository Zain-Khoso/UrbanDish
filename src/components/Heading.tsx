// Components.
import { H2, P } from './ui/typography';

// Types.
type Props = {
  title: string;
  subtitle?: string;
};

// Component.
export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="mb-2 w-full">
      <H2 className="border-0 p-0">{title}</H2>

      <P className="!m-0 pb-2 text-neutral-600">{subtitle}</P>

      <hr />
    </div>
  );
}
