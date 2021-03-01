import { css } from 'lit-element';
/**
 *  This file includes common CSS rules used by many components.
 *
 *  Common CSS variables and the rules that pierce shadow dom are defined in index.html.
 *  Component specific rules are defined inside the component.
 *
 */

/* 
    Using baseline grid with 
    - 1.25 scale factor
    - 1.3 line height and
    - 16px base font 

    Generated using gridlover.net
*/

export const sharedStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  section,
  .section {
    font-size: var(--font-size-l);
    line-height: var(--space-l);
    max-width: 700px;
  }

  .section--margin {
    /* not using shortcut, as these are easier to override */
    padding-top: 0;
    padding-right: var(--space-l);
    padding-bottom: 0;
    padding-left: var(--space-l);

    margin-bottom: var(--space-l);
  }

  h1,
  .h1 {
    font-size: var(--font-size-xxxl);
    line-height: var(--space-xl);

    padding-top: var(--space-l);
    padding-right: var(--space-l);
    padding-bottom: var(--space-l);
    padding-left: var(--space-l);

    margin-top: var(--space-l);
    margin-bottom: var(--space-l);
    width: 100%;
  }

  h2,
  .h2 {
    font-size: var(--font-size-xxl);
    line-height: var(--space-xl);

    padding-top: var(--space-l);
    padding-right: var(--space-l);
    padding-bottom: var(--space-m);
    padding-left: var(--space-l);

    margin-bottom: var(--space-m);
    width: 100%;
  }

  h3,
  .h3 {
    font-size: var(--font-size-xl);
    line-height: var(--space-l);
    margin-top: var(--space-m);

    padding-top: var(--space-m);
    padding-right: var(--space-l);
    padding-bottom: var(--space-m);
    padding-left: var(--space-l);

    margin-bottom: calc(-1 * var(--space-m));

    width: 100%;
  }

  h4,
  h5 .h4,
  .h5 {
    font-size: var(--font-size-l);
    line-height: var(--space-l);

    padding-top: var(--space-l);
    padding-right: var(--space-l);
    padding-bottom: 0;
    padding-left: var(--space-l);

    margin-bottom: 0;
    width: 100%;
  }

  p,
  ul,
  ol,
  pre,
  table,
  blockquote {
    margin-top: 0rem;
    padding: 0 var(--space-l);
    margin-bottom: var(--space-l);
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  hr,
  .hr {
    border: 1px solid;
    margin: -1px 0;
  }

  img {
    max-width: 100%;
    padding-top: var(--space-l);
    padding-right: var(--space-l);
    padding-bottom: var(--space-l);
    padding-left: var(--space-l);
  }

  .img--heading {
    padding-right: 0;
    padding-left: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }
`;
