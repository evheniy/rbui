/* eslint-disable import/prefer-default-export */

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      includeName: true,
      order: [
        'Components',
        [
          'Button',
          [
            'Buttons',
            [
              'Style',
              'Outline',
              'Tags',
              'Disabled',
              'Size',
            ],
            'Button',
            'Input',
            'Link',
          ],
        ],
      ],
    },
  },
};
