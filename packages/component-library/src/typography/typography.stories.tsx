import React from 'react';
import HeadingOne from './headingOne.component.tsx';
import HeadingTwo from './headingTwo.component.tsx';
import HeadingThree from './headingThree.component.tsx';

export default { title: 'Typography' };

export const headings = () => (
  <React.Fragment>
    <HeadingOne text="Some Larger Text"/>
    <HeadingTwo text="Some Large Text"/>
    <HeadingThree text="Some Medium Text"/>
  </React.Fragment>
);
