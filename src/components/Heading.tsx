// Components.
import { H2, P } from './ui/typography';
import Separator from './ui/separator';

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

      <P className="!m-0 pb-2 text-neutral-600 dark:text-neutral-400">{subtitle}</P>

      <Separator />
    </div>
  );
}
