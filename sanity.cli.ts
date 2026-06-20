import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2a4pwebi',
    dataset: 'production',
  },
  server: {
    hostname: 'localhost',
    port: 3333,
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.sanity/**'],
      },
    },
  },
})
