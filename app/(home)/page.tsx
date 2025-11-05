import GeneralButton from '@/components/general-button';
import IconDots from '@/components/icons/icon-dots';
import IconSort from '@/components/icons/icon-sort';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { getBookmarks } from '../../lib/data';

const Home = async () => {
  const bookmarks = await getBookmarks();
  // console.log(bookmarks);

  const getExtractedDomain = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.hostname.replace(/^www\./, '');
  };

  return (
    <div className='px-4 py-6 md:px-8 md:py-8'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-xl font-bold tracking-normal leading-tighter text-neutral-900 dark:text-neutral-0'>
          All Bookmarks
        </h1>
        <GeneralButton className='h-[42px] gap-1 bg-neutral-0 dark:bg-neutral-800'>
          <IconSort />
          <span className='text-base font-semibold tracking-normal leading-snug text-neutral-900 dark:text-neutral-0'>
            Sort by
          </span>
        </GeneralButton>
      </div>

      {/* Bookmarks List */}
      <section className='@container'>
        <ul className='grid gap-8 @lg:grid-cols-2 @4xl:grid-cols-3'>
          {bookmarks.map((bookmark: any) => (
            <li key={bookmark.id}>
              <Card className='pt-4 pb-3 bg-neutral-0'>
                <CardHeader className='p-0 pb-4! mx-4 gap-3 grid-cols-[auto_1fr_auto] border-b border-neutral-300'>
                  <div className='size-11 rounded-lg border border-neutral-300 overflow-hidden'>
                    <Image src={bookmark.favicon} width={44} height={44} alt={bookmark.title} />
                  </div>
                  <div>
                    <CardTitle>{bookmark.title}</CardTitle>
                    <CardDescription>{getExtractedDomain(bookmark.url)}</CardDescription>
                  </div>
                  <Button variant='outline' size='icon-sm' className='p-0 rounde-lg border-neutral-300'>
                    <IconDots />
                  </Button>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
