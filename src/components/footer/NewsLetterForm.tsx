'use client';

// Lib Imports.
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// Components.
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Types.
import { SchemaT, schema } from '@/schemas/NewsLetterForm.schema';

// Components.
export function NewsLetterForm() {
  const form = useForm<SchemaT>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<SchemaT> = function () {
    const dummyReq = new Promise((resolve) => setTimeout(() => resolve(''), 1000));

    toast.promise(dummyReq, {
      loading: 'Loading...',
      error: 'Try again!',
      success: 'Subscribed Successfully 🥳',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="abc@uvw.xyz" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
