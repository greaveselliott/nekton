import React from 'react';
import './typography.scss';

type props = {
  text: string;
}
const HeadingThree: React.FC<props> = ({
  text
}) => {
  return(
    <h3 className='heading-three'>{text}</h3>
  )
}

export default HeadingThree;
