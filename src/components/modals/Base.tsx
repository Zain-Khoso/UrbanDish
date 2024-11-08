// Components.
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import Separator from '../ui/separator';
import { Button } from '../ui/button';

// Types.
import { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons/lib';
type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  hideClose?: boolean;
  title: string;
  description?: string;
  actionLabel: string;
  actionFunc: () => void;
  actionIcon?: IconType;
  secondaryActionLabel?: string;
  secondaryActionFunc?: () => void;
  secondaryActionIcon?: IconType;
  children?: React.ReactNode;
};

// Base modal component for the entire application.
export default function Base({
  isOpen,
  setIsOpen,
  hideClose = false,
  title,
  description,
  actionLabel,
  actionFunc,
  actionIcon: ActionIcon,
  secondaryActionLabel,
  secondaryActionFunc,
  secondaryActionIcon: SecondaryActionIcon,
  children,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent
        hideClose={hideClose}
        className="flex h-full flex-col justify-between md:h-fit"
      >
        <DialogHeader>
          <DialogTitle className="text-xl">{title}</DialogTitle>

          {description ? <DialogDescription>{description}</DialogDescription> : <Separator />}
        </DialogHeader>

        {children}

        <DialogFooter className="flex flex-col justify-between gap-4 sm:flex-col sm:justify-between">
          <Separator />

          <div className="!m-0 flex gap-2 sm:flex-row-reverse">
            <Button variant="gradiant" className="flex w-full flex-row" onClick={actionFunc}>
              <span className="flex-1 text-center">{actionLabel}</span>

              {ActionIcon && <ActionIcon />}
            </Button>

            {secondaryActionLabel && secondaryActionFunc && (
              <Button
                variant="outline"
                className="flex w-full flex-row-reverse"
                onClick={secondaryActionFunc}
              >
                <span className="flex-1 text-center">{secondaryActionLabel}</span>

                {SecondaryActionIcon && <SecondaryActionIcon />}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
