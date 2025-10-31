import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import AppSidebarHeader from './app-sidebar-header';

const AppSidebar = () => {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent className='gap-4'>
        <SidebarGroup className='px-4 py-0'>
          <SidebarGroupContent>
            <SidebarGroupLabel className='uppercase px-3 py-0 mb-[2px] h-5 text-xs font-bold text-neutral-800 dark:text-neutral-100 tracking-0 leading-snug'>
              Tags
            </SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem className='h-[42px] grid items-center'>
                <Label htmlFor='ai' className='cursor-pointer h-full px-3 py-2'>
                  <Checkbox
                    id='ai'
                    className='cursor-pointer border-neutral-500 dark:border-neutral-400 data-[state=checked]:bg-teal-800 data-[state=checked]:border-teal-800 dark:data-[state=checked]:border-teal-800 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:focus-visible:outline-neutral-100'
                  />
                  <span className='flex-1 text-base text-neutral-800 dark:text-neutral-100 font-semibold tracking-normal leading-snug'>
                    Ai
                  </span>
                  <span className='size-6 rounded-full border border-neutral-300 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-600 grid place-items-center text-xs font-medium text-neutral-800 dark:text-neutral-0 tracking-normal leading-snug'>
                    1
                  </span>
                </Label>
              </SidebarMenuItem>
              <SidebarMenuItem className='h-[42px] grid items-center'>
                <Label htmlFor='community' className='cursor-pointer h-full px-3 py-2'>
                  <Checkbox
                    id='community'
                    className='cursor-pointer border-neutral-500 dark:border-neutral-400 data-[state=checked]:bg-teal-800 data-[state=checked]:border-teal-800 dark:data-[state=checked]:border-teal-800 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:focus-visible:outline-neutral-100'
                  />
                  <span className='flex-1 text-base text-neutral-800 dark:text-neutral-100 font-semibold tracking-normal leading-snug'>
                    Community
                  </span>
                  <span className='size-6 rounded-full border border-neutral-300 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-600 grid place-items-center text-xs font-medium text-neutral-800 dark:text-neutral-0 tracking-normal leading-snug'>
                    5
                  </span>
                </Label>
              </SidebarMenuItem>
              <SidebarMenuItem className='h-[42px] grid items-center'>
                <Label htmlFor='compatibility' className='cursor-pointer h-full px-3 py-2'>
                  <Checkbox
                    id='compatibility'
                    className='cursor-pointer border-neutral-500 dark:border-neutral-400 data-[state=checked]:bg-teal-800 data-[state=checked]:border-teal-800 dark:data-[state=checked]:border-teal-800 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 dark:focus-visible:outline-neutral-100'
                  />
                  <span className='flex-1 text-base text-neutral-800 dark:text-neutral-100 font-semibold tracking-normal leading-snug'>
                    Compatibility
                  </span>
                  <span className='size-6 rounded-full border border-neutral-300 bg-neutral-100 dark:border-neutral-400 dark:bg-neutral-600 grid place-items-center text-xs font-medium text-neutral-800 dark:text-neutral-0 tracking-normal leading-snug'>
                    1
                  </span>
                </Label>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>FOOTER</SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
