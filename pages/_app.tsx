import type { AppProps } from 'next/app';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import '../public/css/styles.css';

const HomePage = ({ Component, pageProps }: AppProps) => {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
};

export default HomePage;
