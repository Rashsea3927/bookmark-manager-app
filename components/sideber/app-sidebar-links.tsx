'use client';

import IconArchive from '@/components/icons/icon-archive';
import IconHome from '@/components/icons/icon-home';
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: IconHome },
  { href: '/archived', label: 'Archived', icon: IconArchive },
];

const AppSidebarLinks = () => {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <>
      {NAV_LINKS.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton onClick={() => setOpenMobile(false)} isActive={pathname === link.href} asChild>
            <Link
              href={link.href}
              className='flex items-center gap-2 px-3 py-2 rounded-md text-base font-semibold tracking-normal leading-snug [&>svg]:size-5 hover:[&_path]:stroke-neutral-900 hover:[&_path]:dark:stroke-neutral-0 text-neutral-800 dark:text-neutral-100 data-[active=true]:bg-neutral-100 data-[active=true]:text-neutral-900 dark:data-[active=true]:bg-neutral-600 dark:data-[active=true]:text-neutral-0 hover:bg-neutral-100 hover:text-neutral-900 hover:dark:bg-neutral-600 hover:dark:text-neutral-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100'
            >
              <link.icon pathname={pathname} />
              {link.label}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};

export default AppSidebarLinks;
