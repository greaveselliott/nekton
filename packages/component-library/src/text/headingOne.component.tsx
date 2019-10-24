import React from 'react';
import './text.scss';

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
