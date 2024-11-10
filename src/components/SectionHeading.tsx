// Icons.
import { GoDash } from 'react-icons/go';

// Components.
import { Lead, H3 } from './ui/typography';

// Types.
type Props = {
  title?: string;
  heading: string;
};

// Component.
export default function SectionHeading({ title, heading }: Props) {
  return (
    <div className="flex flex-col">
      {title && (
        <div className="flex flex-row items-center gap-2">
          <Lead className="text-primary-gradiant">{title}</Lead>

          <GoDash className="fill-red-600" />
        </div>
      )}

      <H3>{heading}</H3>
    </div>
  );
}
