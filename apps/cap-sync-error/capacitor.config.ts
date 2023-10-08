import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Cap Sync Error',
  webDir: '../../dist/apps/cap-sync-error',
  server: {
    androidScheme: 'https'
  }
};

export default config;
