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
          'Badges',
          'Breadcrumb',
          'Button',
          [
            'Buttons',
            'Button',
            'Input',
            'Link',
          ],
          'ButtonGroup',
          ['ButtonGroup', 'ButtonToolbar'],
          'CloseButton',
          'Progress',
          'Spinner',
        ],
      ],
    },
  },
};
