'use client';

// Lib Imports.
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { Button } from '@/components/ui/button';

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

  const onSubmit: SubmitHandler<Step1T> = async function (data) {
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>

              <FormControl>
                <Input placeholder="923123456789" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="gradiant" className="!mt-8 w-full">
          Continue
        </Button>
      </form>
    </Form>
  );
}
