import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'student-schedule',
  webDir: 'www',
  server: {
    // androidScheme: 'https'
    url: 'http://192.168.1.13:4200',
    cleartext: true,
  },
};

export default config;
