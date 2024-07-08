import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'templates',
        label: 'Templates',
        path: 'content/templates',
        fields: [
          {
            type: 'string',
            name: 'windowTitle',
            label: 'Window Title',
          },
          {
            type: 'object',
            name: 'page1',
            label: 'Page 1',
            fields: [
              {
                type: 'object',
                name: 'fromAddress',
                label: 'From Address',
                fields: [
                  {
                    type: 'string',
                    name: 'fontFamily',
                    label: 'Font Family',
                  },
                  {
                    type: 'number',
                    name: 'lineHeight',
                    label: 'Line Height',
                  },
                  {
                    type: 'string',
                    name: 'data',
                    label: 'Data',
                    list: true,
                  },
                ],
              },
              {
                type: 'object',
                name: 'stampSection',
                label: 'Stamp Section',
                fields: [
                  {
                    type: 'string',
                    name: 'data',
                    label: 'Data',
                  },
                ],
              },
              {
                type: 'object',
                name: 'toAddress',
                label: 'To Address',
                fields: [
                  {
                    type: 'string',
                    name: 'fontFamily',
                    label: 'Font Family',
                  },
                  {
                    type: 'number',
                    name: 'lineHeight',
                    label: 'Line Height',
                  },
                  {
                    type: 'string',
                    name: 'data',
                    label: 'Data',
                    list: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
