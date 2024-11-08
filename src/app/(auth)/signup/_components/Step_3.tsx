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
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SignUpT, SignUpStep3, Step3T } from '@/schemas/AuthForm.schema';
import ButtonWithSideIcon from '../../../../components/ButtonWithSideIcon';
import ProfilePictureInput from './ProfilePictureInput';

// Types.
type Props = {
  onNext: (data: Step3T) => Promise<void>;
  onPrev: () => void;
  defaultValues: Step3T;
  setFormData: Dispatch<SetStateAction<SignUpT>>;
  setCroppedImage: Dispatch<SetStateAction<null | File>>;
};

// Component.
export default function Step_3({
  onNext,
  onPrev,
  defaultValues,
  setFormData,
  setCroppedImage,
}: Props) {
  const form = useForm<Step3T>({
    resolver: zodResolver(SignUpStep3),
    defaultValues,
  });

  const { isLoading, isSubmitting, isSubmitSuccessful } = form.formState;

  const isDisabled = isLoading || isSubmitting || isSubmitSuccessful;

  const handlePrev = function () {
    const { address, image } = form.getValues();

    setFormData((value) => ({ ...value, address, image }));

    onPrev();
  };

  const onSubmit: SubmitHandler<Step3T> = async function (data) {
    await onNext(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          disabled={isDisabled}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address *</FormLabel>

              <FormControl>
                <Input placeholder="House No. 404, Error Street, Sukkur" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image */}
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>

              <FormControl>
                <ProfilePictureInput
                  id="image"
                  setCroppedImage={setCroppedImage}
                  disabled={isDisabled}
                  setError={form.setError}
                  errors={form.formState.errors}
                  clearErrors={form.clearErrors}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="!mt-8 flex w-full flex-row gap-4">
          <ButtonWithSideIcon
            type="button"
            variant="outline"
            disabled={isDisabled}
            label="Back"
            icon={FaArrowLeft}
            side="left"
            onClick={handlePrev}
          />

          <ButtonWithSideIcon
            type="submit"
            variant="gradiant"
            disabled={isDisabled}
            label="Create Account"
            icon={FaArrowRight}
            side="right"
          />
        </div>
      </form>
    </Form>
  );
}
