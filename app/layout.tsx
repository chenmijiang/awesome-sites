import { Metadata } from 'next/types';

import NavBanner from '@/components/global/nav-banner';
import BgImage from '@/components/home/bg-image';
import { fetchBingImg } from '@/utils';
import { globalErrorHandler } from '@/utils/globalErrorHandler';

export const metadata: Metadata = {
  title: '前端森林',
  icons: './favicon.ico',
};

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout(props: Props) {
  const bingImg = await fetchBingImg();

  return (
    <html lang="en">
      <body>
        <NavBanner />
        {props.children}
        <BgImage img={bingImg} />
      </body>
    </html>
  );
}

globalErrorHandler();
