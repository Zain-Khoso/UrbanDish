'use client';

// Lib Imports.
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

// Utils.
import { userReq } from '@/utils/axios.instances';

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
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ButtonWithSideIcon from '../../_components/ButtonWithSideIcon';

// Types.
import { signInSchema, SignInT } from '@/schemas/AuthForm.schema';

// Component.
export default function SignInForm() {
  const router = useRouter();

  const form = useForm<SignInT>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<SignInT> = async function (data) {
    console.table(data);
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
              <FormLabel>Email *</FormLabel>

              <FormControl>
                <Input placeholder="abc@xyz.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
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
