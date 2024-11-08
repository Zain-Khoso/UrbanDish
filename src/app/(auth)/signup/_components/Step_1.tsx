'use client';

// Lib Imports.
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

// Utils.
import { checkEmailUniqueness, checkPhoneUniqueness } from '@/utils/checks.user';

// Icons.
import { FaArrowRight } from 'react-icons/fa6';

// Components.
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ButtonWithSideIcon from '../../../../components/ButtonWithSideIcon';

// Types.
import { SignUpT, SignUpStep1, Step1T } from '@/schemas/AuthForm.schema';
type Props = {
  onNext: () => void;
  defaultValues: Step1T;
  setFormData: Dispatch<SetStateAction<SignUpT>>;
};

// Component.
export default function Step_1({ onNext, defaultValues, setFormData }: Props) {
  const form = useForm<Step1T>({
    resolver: zodResolver(SignUpStep1),
    defaultValues,
  });

  const disabled = form.formState.isLoading || form.formState.isSubmitting;

  const onSubmit: SubmitHandler<Step1T> = async function (data) {
    const { email, phone } = data;

    const check1 = toast.promise(checkEmailUniqueness({ email, setError: form.setError }), {
      loading: 'Verifying your email.',
      success: 'Email is valid',
      error: 'Email is invalid',
    });

    const check2 = toast.promise(checkPhoneUniqueness({ phone, setError: form.setError }), {
      loading: 'Verifying your phone.',
      success: 'Phone is valid',
      error: 'Phone is invalid',
    });

    await Promise.all([check1, check2]);

    if (form.formState.errors.email || form.formState.errors.phone) return;

    setFormData((value) => ({ ...value, ...data }));
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>

              <FormControl>
                <Input placeholder="abc@xyz.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          disabled={disabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone *</FormLabel>

              <FormControl>
                <Input placeholder="923123456789" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonWithSideIcon
          type="submit"
          variant="gradiant"
          label="Continue"
          icon={FaArrowRight}
          side="right"
          className="!mt-8"
        />
      </form>
    </Form>
  );
}
