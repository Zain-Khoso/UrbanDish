// Components.
import { H1, Muted, Lead } from './ui/typography';

// Types.
type Props = {
  number: number | string;
  title: string;
  subtitle: string;
};

// Component.
export default function NumberHighlight({ number, title, subtitle }: Props) {
  return (
    <div className="flex flex-row items-center gap-4 md:justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-primary-gradiant h-[2lh] w-2 rounded-sm"></div>

        <H1 className="text-primary-gradiant">{number}</H1>
      </div>

      <div>
        <Muted>{subtitle}</Muted>
        <Lead>{title}</Lead>
      </div>
    </div>
  );
}
