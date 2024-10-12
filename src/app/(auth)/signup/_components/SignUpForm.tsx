'use client';

// Lib Imports.
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { Button } from '@/components/ui/button';

// Types.
import { AuthFormT, schema } from '@/schemas/AuthForm.schema';

// Component.
export default function SignUpForm() {
  const form = useForm<AuthFormT>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      phone: '',
      name: '',
      image: '',
      address: '',
    },
  });

  const onSubmit: SubmitHandler<AuthFormT> = async function (data) {
    console.log(data);
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

              <FormDescription>A unique email address.</FormDescription>

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
                <Input placeholder="abc@xyz.com" {...field} />
              </FormControl>

              <FormDescription>Your active cell phone number.</FormDescription>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full flex-row space-x-2">
          <Button type="button" variant="outline" className="flex-1">
            Back
          </Button>

          <Button type="submit" variant="gradiant" className="flex-1">
            Create User
          </Button>
        </div>
      </form>
    </Form>
  );
}
