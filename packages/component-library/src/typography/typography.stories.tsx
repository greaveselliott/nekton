import React from 'react';

import H1 from './h1/h1.component.tsx';
import H2 from './h2/h2.component.tsx';
import H3 from './h3/h3.component.tsx';
import H4 from './h4/h4.component.tsx';
import H5 from './h5/h5.component.tsx';
import H6 from './h6/h6.component.tsx';
import P from './paragraph/paragraph.component.tsx';

export default { title: 'Typography' };

export const Headings = () => (
  <>
    <H1>Heading one</H1>
    <H2>Heading two</H2>
    <H3>Heading three</H3>
    <H4>Heading four</H4>
    <H5>Heading five</H5>
    <H6>Heading six</H6>
  </>
);

export const Paragraph = () => (
  <>
    <P>A great dive on the Black pearl, great visability.</P>
  </>
);
