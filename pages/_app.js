import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <TinaEditProvider editMode={<TinaCMS {...pageProps} />}>
      <Component {...pageProps} />
    </TinaEditProvider>
  );
}

export default MyApp;
