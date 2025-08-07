import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: '#49BBBD',
      colorPrimaryHover: '#3a9f9f',
      colorPrimaryActive: '#2b7d7d',
      borderRadius: 20,
      fontSize: 16,
      fontWeight: 500,
      paddingBlock: 0,
      paddingInline: 0,
      controlHeight: 40,
    },
  },
  token: {
    colorPrimary: '#49BBBD',
  },
};

export default theme;
