import NavBanner from '@/components/nav-banner';
import { globalErrorHandler } from '@/utils/globalErrorHandler';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: '前端森林',
  icons: './favicon.ico',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        {/* 导航栏 */}
        <NavBanner />
        {props.children}
      </body>
    </html>
  );
}

globalErrorHandler();
