const defaultHtmlAttributes = 'lang="en" class="h-100"';

const defaultTitle = '<title>Loading...</title>';

const defaultMeta = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
`;

const defaultBody = `
<div id="root" class="d-flex w-100 h-100 p-3 mx-auto flex-column">
  <style>
    .spinner:before {
      content:"";
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      height: 80px;
      width: 80px;
      margin-top: -40px;
      margin-left: -40px;
      border-radius: 50%;
      border-top: 2px solid #009688;
      border-right: 2px solid transparent;
      animation: spinner 0.7s linear infinite;
    }
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  </style>
  <span class="spinner"></span>
</div>
`;

export interface HtmlProps {
  htmlAttributes?: string;
  title?: string;
  meta?: string;
  base?: string;
  link?: string;
  style?: string;
  bodyAttributes?: string;
  body?: string;
  noscript?: string;
  script?: string;
}

/**
 * Page HTML
 * @param props Page HTML parameters
 * @returns {string} Page HTML
 */
export const html = (props: HtmlProps = {}): string => {
  const {
    htmlAttributes = defaultHtmlAttributes,
    title = defaultTitle,
    meta = defaultMeta,
    base = '',
    link = '',
    style = '',
    bodyAttributes = 'class="d-flex h-100 text-center text-white bg-dark"',
    body = defaultBody,
    noscript = '',
    script = '',
  } = props;

  return `
  <!DOCTYPE html>
  <html ${htmlAttributes}>
  <head>
    ${title}
    ${base}
    ${meta}
    ${link}
    ${style}
  </head>
  <body ${bodyAttributes}>
    ${body}
    ${noscript}
    ${script}
  </body>
  </html>
  `;
};
