import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(configEnv => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, 'src', 'app'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        infrastructure: resolve(__dirname, 'src', 'infrastructure'),
        models: resolve(__dirname, 'src', 'models'),
        mock_services: resolve(__dirname, 'src', 'mock_services'),
        context: resolve(__dirname, 'src', 'context'),
        utils: resolve(__dirname, 'src', 'utils'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
  };
});
