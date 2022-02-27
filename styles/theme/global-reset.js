import { Global, css } from '@emotion/react';

const GlobalReset = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
          }

          html {
            scroll-behavior: smooth;
            line-height: 1.15; /* 1 */
            -webkit-text-size-adjust: 100%; /* 2 */
          }

          *:focus {
            box-shadow: none !important;
          }

          body {
            font-family: 'Darker Grotesque', -apple-system, BlinkMacSystemFont,
              'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol', 'Cormorant';
            margin: 0;
            max-width: 1328px;
            margin: 0 auto;
            background: #f5f5f5 url('/static/images/background-image.svg');
            background-repeat: no-repeat;
            background-position: top 0px left 120px;
          }

          /* Render the main element consistently in IE. */
          main {
            display: block;
          }

          /* Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers. */
          pre {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
          }

          /* Remove the gray background on active links in IE 10. */
          a {
            background-color: transparent;
            text-decoration: none;
          }

          /* Remove the bottom border in Chrome 57-, and add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */
          abbr[title] {
            border-bottom: none; /* 1 */
            text-decoration: underline; /* 2 */
            text-decoration: underline dotted; /* 2 */
          }

          /* Add the correct font weight in Chrome, Edge, and Safari. */
          b,
          strong {
            font-weight: bolder;
          }

          /* Correct the inheritance and scaling of font size in all browsers, and correct the odd em font sizing in all browsers. */
          code,
          kbd,
          samp {
            font-family: monospace, monospace; /* 1 */
            font-size: 1em; /* 2 */
          }

          /* Add the correct font size in all browsers. */
          small {
            font-size: 80%;
          }

          /* Remove the border on images inside links in IE 10. */
          img {
            border-style: none;
          }

          /* Change the font styles in all browsers, and remove the margin in Firefox and Safari. */
          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
          }

          /* Remove the inheritance of text transform in Firefox. */
          button,
          select {
            /* 1 */
            text-transform: none;
          }

          /* Remove the inner border and padding in Firefox. */
          button::-moz-focus-inner,
          [type='button']::-moz-focus-inner,
          [type='reset']::-moz-focus-inner,
          [type='submit']::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }

          /* Restore the focus styles unset by the previous rule. */
          button:-moz-focusring,
          [type='button']:-moz-focusring,
          [type='reset']:-moz-focusring,
          [type='submit']:-moz-focusring {
            outline: 1px dotted ButtonText;
          }

          /* Correct the padding in Firefox. */
          fieldset {
            padding: 0.35em 0.75em 0.625em;
          }

          /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */
          progress {
            vertical-align: baseline;
          }

          /* Remove the default vertical scrollbar in IE 10+. */
          textarea {
            overflow: auto;
          }

          /* Add the correct box sizing in IE 10. Remove the padding in IE 10. */
          [type='checkbox'],
          [type='radio'] {
            box-sizing: border-box; /* 1 */
            padding: 0; /* 2 */
          }

          /* Correct the cursor style of increment and decrement buttons in Chrome. */
          [type='number']::-webkit-inner-spin-button,
          [type='number']::-webkit-outer-spin-button {
            height: auto;
          }

          /* Correct the odd appearance in Chrome and Safari. Correct the outline style in Safari. */
          [type='search'] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
          }

          /* Remove the inner padding in Chrome and Safari on macOS. */
          [type='search']::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          /* Add the correct display in Edge, IE 10+, and Firefox. */
          details {
            display: block;
          }

          /* Add the correct display in all browsers. */
          summary {
            display: list-item;
          }

          /* Add the correct display in IE 10+. */
          template {
            display: none;
          }

          /* Add the correct display in IE 10. */
          [hidden] {
            display: none;
          }

          #__next {
            display: flex;
            flex-direction: column;
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalReset;

/*

CSS global reset with global styles
source: https://ageek.dev/normalize-css

*/
