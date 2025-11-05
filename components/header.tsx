'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import IconAdd from './icons/icon-add';
import IconDarkTheme from './icons/icon-dark-theme';
import IconLightTheme from './icons/icon-light-theme';
import IconLogout from './icons/icon-logout';
import IconPalette from './icons/icon-palette';
import IconSearch from './icons/icon-search';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Switch } from './ui/switch';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (checked: boolean) => {
    // Handle theme change logic here
    if (checked) {
      // Switch to dark theme
      setTheme('dark');
    } else {
      // Switch to light theme
      setTheme('light');
    }
  };

  return (
    <header className='flex items-center justify-between px-4 py-3 border-b border-neutral-300 dark:border-neutral-500 bg-neutral-0 dark:bg-neutral-800 md:px-8'>
      <div className='flex items-center gap-[10px]'>
        <SidebarTrigger className='size-10 rounded-lg border border-neutral-400 lg:hidden' />
        <div className='relative w-[193px] md:w-80'>
          <Input
            className='pl-10 text-sm font-medium text-neutral-800 dark:text-neutral-100 leading-base tracking-normal border-neutral-300 dark:border-neutral-500 bg-neutral-0 dark:bg-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 md:h-11'
            name='search'
            placeholder='Search by title...'
          />
          <IconSearch className='size-5 absolute top-1/2 left-3 -translate-y-1/2' />
        </div>
      </div>
      <div className='flex items-center gap-[10px] md:gap-4'>
        <Button className='w-10 h-10 rounded-lg p-0 bg-teal-700 inset-shadow-add focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 md:w-fit md:h-11 md:px-4 md:py-3'>
          <IconAdd />
          <span className='hidden text-base text-neutral-0 tracking-normal font-semibold md:inline-block'>
            Add Bookmark
          </span>
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='p-0 size-10 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100'>
              <Image src='/assets/image-avatar.webp' width={40} height={40} alt='' />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            sideOffset={8}
            className='border-neutral-100 dark:border-neutral-500 bg-neutral-0 dark:bg-neutral-600'
          >
            <div className='flex items-center gap-[10px] py-3 px-4 border-b border-neutral-100 dark:border-neutral-500'>
              <Image src='/assets/image-avatar.webp' width={40} height={40} alt='' />
              <div>
                <p className='text-sm font-semibold tracking-normal leading-snug text-neutral-900 dark:text-neutral-0'>
                  Emily Carter
                </p>
                <p className='text-sm font-medium tracking-normal leading-snug text-neutral-800 dark:text-neutral-100'>
                  emily101@email.com
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between gap-[10px] py-3 px-4 border-b border-neutral-100 dark:border-neutral-500'>
              <div className='flex items-center gap-[10px]'>
                <IconPalette />
                <p className='text-sm tracking-normal leading-snug font-semibold text-neutral-900 dark:text-neutral-100'>
                  Theme
                </p>
              </div>
              <Switch
                className='focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100'
                defaultChecked={theme === 'dark'}
                onCheckedChange={handleThemeChange}
              >
                <span className='absolute top-1/2 -translate-y-1/2 left-[10px] z-10 size-[14px]'>
                  <IconLightTheme />
                </span>
                <span className='absolute top-1/2 -translate-y-1/2 right-[10px] z-10 size-[14px]'>
                  <IconDarkTheme />
                </span>
              </Switch>
            </div>
            <div className='py-3 px-4'>
              <Button
                variant={'ghost'}
                className='flex items-center gap-[10px] p-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100'
              >
                <IconLogout />
                <p className='text-sm tracking-normal leading-snug font-semibold text-neutral-900 dark:text-neutral-100'>
                  Logout
                </p>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
