// Icons.
import { GoDash } from 'react-icons/go';

// Components.
import { Lead, H3 } from './ui/typography';
import { cn } from '@/utils/helper_tailwind';

// Types.
type Props = {
  title: string;
  heading?: string;
  center?: boolean;
};

// Component.
export default function SectionHeading({ title, heading, center = false }: Props) {
  return (
    <div className={cn('flex flex-col', center && 'items-center')}>
      {title && (
        <div className="flex flex-row items-center gap-2">
          <Lead className="text-theme">{title}</Lead>

          <GoDash className="fill-red-600" />
        </div>
      )}

      <H3>{heading}</H3>
    </div>
  );
}
