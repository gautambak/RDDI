import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'RDDI',
    social: {
      github: 'https://github.com/gautambak/RDDI'
    },
    sidebar: [{
      label: 'Weclome',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Welcome start here',
        link: '/welcome/startpage/'
      }, {
        label: 'Project Principles',
        link: '/welcome/principles/'
      }, {
        label: 'Product Structure',
        link: '/welcome/high-level-project-structure/'
      }, {
        label: 'Practical Examples',
        link: '/welcome/practical-examples/'
      }, {
        label: 'Get involved',
        link: '/welcome/get-involved/'
      }]
    }
    // {
    //   label: 'Guides',
    //   items: [
    //     // Each item here is one entry in the navigation menu.
    //     { label: 'Example Guide', link: '/guides/example/' },
    //     { label: 'Example Guide2', link: '/guides/example2/' },
    //   ],
    // },
    // {
    //   label: 'Reference',
    //   autogenerate: { directory: 'reference' },
    // },
    ]
  })],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
