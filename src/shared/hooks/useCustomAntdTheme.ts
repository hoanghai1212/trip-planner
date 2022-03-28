import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
export default function useCustomAntdTheme() {
  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: '#00cec9',
      },
    });
  }, []);
}
