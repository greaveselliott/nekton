import React from 'react';
import './typography.scss';

type props = {
  text: string;
}
const HeadingOne: React.FC<props> = ({
  text
}) => {
  return(
    <h1 className='heading-one'>{text}</h1>
  )
}

export default HeadingOne;