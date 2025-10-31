'use client';

import IconClose from '@/components/icons/icon-close';
import { Button } from '@/components/ui/button';
import { SidebarHeader, SidebarMenu, useSidebar } from '@/components/ui/sidebar';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import AppSidebarLinks from './app-sidebar-links';

const AppSidebarHeader = () => {
  const { theme } = useTheme();
  const { setOpen, setOpenMobile, isMobile } = useSidebar();

  const handleCloseSidebar = () => {
    if (isMobile) {
      setOpenMobile(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <SidebarHeader className='relative p-0 mb-4'>
      <div className='px-5 pt-5 pb-[10px]'>
        {theme === 'undefined' || theme === 'dark' ? (
          <Image src='/assets/logo-dark-theme.svg' width={214} height={32} alt='' />
        ) : (
          <Image src='/assets/logo-light-theme.svg' width={214} height={32} alt='' />
        )}
      </div>
      <Button
        variant='ghost'
        onClick={handleCloseSidebar}
        className='absolute top-3 right-3 rounded-full p-0 [&>svg]:size-5 lg:hidden'
      >
        <IconClose />
      </Button>
      <SidebarMenu className='gap-2 px-4'>
        <AppSidebarLinks />
      </SidebarMenu>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
