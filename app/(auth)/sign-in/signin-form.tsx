'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const SignInForm = () => {
  const { theme } = useTheme();

  return (
    <div className='fixed w-[calc(100%-32px)] max-w-[448px] max-h-[90vh] overflow-auto top-1/2 left-1/2 -translate-1/2 grid gap-8 px-5 py-8 rounded-xl bg-neutral-0 dark:bg-neutral-800 dark:border dark:border-neutral-500 md:px-8 md:py-10 md:gap-10'>
      {theme === 'undefined' || theme === 'dark' ? (
        <Image src='/assets/logo-dark-theme.svg' width={214} height={32} alt='' />
      ) : (
        <Image src='/assets/logo-light-theme.svg' width={214} height={32} alt='' />
      )}
      <div>
        <h1 className='mb-1 text-2xl font-bold leading-snug tracking-normal text-neutral-900 dark:text-neutral-0'>
          Log in to your account
        </h1>
        <p className='text-sm font-semibold leading-snug tracking-normal text-neutral-800 dark:text-neutral-100'>
          Welcome back! Please enter your details.
        </p>
      </div>
      <form action=''>
        <FieldGroup className='gap-4'>
          <Field className='gap-[6px]'>
            <FieldLabel
              htmlFor='email'
              className='text-sm font-medium leading-base tracking-normal text-neutral-900 dark:text-neutral-0'
            >
              Email
            </FieldLabel>
            <Input
              id='email'
              type='email'
              name='email'
              className='h-11 cursor-pointer border border-neutral-500 bg-neutral-0 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:border-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-500 dark:hover:border-neutral-400 dark:focus-visible:border-neutral-800 dark:focus-visible:border-2 dark:focus-visible:outline-neutral-100'
              required
            />
          </Field>
          <Field className='gap-[6px]'>
            <FieldLabel
              htmlFor='password'
              className='text-sm font-medium leading-base tracking-normal text-neutral-900 dark:text-neutral-0'
            >
              Password
            </FieldLabel>
            <Input
              id='password'
              type='password'
              name='password'
              className='h-11 cursor-pointer border border-neutral-500 bg-neutral-0 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:border-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-500 dark:hover:border-neutral-400 dark:focus-visible:border-2 dark:focus-visible:outline-neutral-100'
              required
            />
          </Field>
          <Field>
            <Button className='relative z-2 cursor-pointer h-[46px] rounded-lg bg-teal-700 text-base font-semibold leading-snug tracking-normal text-neutral-0 inset-shadow-[0px_1px_0px_1px] inset-shadow-neutral-0/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100'>
              Log in
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <div className='text-center'>
        <p className='mb-3 text-sm font-semibold leading-snug tracking-normal text-neutral-800 dark:text-neutral-100'>
          Forgot Password?&ensp;
          <Link
            href='/sign-up'
            className='text-sm font-semibold leading-snug tracking-normal outline-0 rounded-md text-neutral-900 focus-visible:p-[2px] hover:text-teal-800 dark:text-neutral-0 dark:hover:text-neutral-100 dark:focus-visible:border-neutral-800 dark:focus-visible:border-2 focus-visible:ring-2 dark:focus-visible:ring-neutral-100'
          >
            Reset it
          </Link>
        </p>
        <p className='text-sm font-semibold leading-snug tracking-normal text-neutral-800 dark:text-neutral-100'>
          Don't have an account?&ensp;
          <Link
            href='/sign-up'
            className='text-sm font-semibold leading-snug tracking-normal outline-0 rounded-md text-neutral-900 focus-visible:p-[2px] hover:text-teal-800 dark:text-neutral-0 dark:hover:text-neutral-100 dark:focus-visible:border-neutral-800 dark:focus-visible:border-2 focus-visible:ring-2 dark:focus-visible:ring-neutral-100'
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
