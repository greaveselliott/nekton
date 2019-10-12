import React from 'react';
import Button from './button.tsx';

export default { title: 'Button' };

export const defaultPrimaryButtonWithText = () => (
  <Button style="primary">
    <span>Primary Button</span>
  </Button>
);

export const defaultSecondaryButtonWithText = () => (
  <Button type="default" style="secondary">
    <span>Secondary Button</span>
  </Button>
);

export const smallRoundPrimaryButton = () => (
  <Button type="round" style="primary" size="small"></Button>
);

export const smallRoundSecondaryButton = () => (
  <Button type="round" style="secondary" size="small"></Button>
);

export const mediumRoundPrimaryButton = () => (
  <Button type="round" style="primary" size="medium"></Button>
);

export const mediumRoundSecondaryButton = () => (
  <Button type="round" style="secondary" size="medium"></Button>
);

export const largeRoundPrimaryButton = () => (
  <Button type="round" style="primary" size="large"></Button>
);

export const largeRoundSecondaryButton = () => (
  <Button type="round" style="secondary" size="large"></Button>
);

export const smallRoundNegativeButton = () => (
  <Button type="round" style="negative" size="large"></Button>
);

export const smallRoundNegativeDisabledButton = () => (
  <Button type="round" style="negative" size="small" disabled={true}></Button>
);

export const mediumRoundNegativeButton = () => (
  <Button type="round" style="negative" size="medium"></Button>
);

export const mediumRoundNegativeDisabledButton = () => (
  <Button type="round" style="negative" size="medium" disabled={true}></Button>
);

export const largeRoundNegativeButton = () => (
  <Button type="round" style="negative" size="large"></Button>
);

export const largeRoundNegativeDisabledButton = () => (
  <Button type="round" style="negative" size="large" disabled={true}></Button>
);

export const defaultPrimaryButtonWithLink = () => (
  <Button href="#">Some Text</Button>
);
