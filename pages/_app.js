import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

// 다크모드 지원할떄
function MyApp({ Component, pageProps }) {
  return (
    // 속성값을 class 로해줘야 됨;

    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
