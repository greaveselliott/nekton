import React from 'react';
import './typography.scss';

type props = {
  text: string;
}
const HeadingTwo: React.FC<props> = ({
  text
}) => {
  return(
    <h2 className='heading-two'>{text}</h2>
  )
}

export default HeadingTwo;
