'use client';

// Lib Imports.
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Icons.
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

// Components.
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignUpT, SignUpStep2, Step2T } from '@/schemas/AuthForm.schema';
import ButtonWithSideIcon from '../../../../components/ButtonWithSideIcon';

// Types.
type Props = {
  onNext: () => void;
  onPrev: () => void;
  defaultValues: Step2T;
  setFormData: Dispatch<SetStateAction<SignUpT>>;
};

// Component.
export default function Step_2({ onNext, onPrev, defaultValues, setFormData }: Props) {
  const form = useForm<Step2T>({
    resolver: zodResolver(SignUpStep2),
    defaultValues,
  });

  const disabled = form.formState.isLoading || form.formState.isSubmitting;

  const handlePrev = function () {
    const { name, password } = form.getValues();

    setFormData((value) => ({ ...value, name, password }));

    onPrev();
  };

  const onSubmit: SubmitHandler<Step2T> = async function (data) {
    setFormData((value) => ({ ...value, ...data }));

    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>

              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password *</FormLabel>

              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>

              <FormMessage />

              <FormDescription>
                Atleast 8 characters long, alphanumeric value with an special character.
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="!mt-8 flex w-full flex-row gap-4">
          <ButtonWithSideIcon
            type="button"
            variant="outline"
            label="Back"
            icon={FaArrowLeft}
            side="left"
            onClick={handlePrev}
          />

          <ButtonWithSideIcon
            type="submit"
            variant="gradiant"
            label="Continue"
            icon={FaArrowRight}
            side="right"
          />
        </div>
      </form>
    </Form>
  );
}
