/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from 'react';

interface Props {
  className: any;
}

export const Arrow = ({ className }: Props): JSX.Element => {
  return (
    <svg
      width='228'
      height='100'
      viewBox='0 0 228 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333'
        stroke='#C0B7E8'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M157.5 50H0' stroke='#C0B7E8' stroke-width='3' />
    </svg>
  );
};
