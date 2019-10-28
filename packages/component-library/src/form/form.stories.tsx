import React from 'react';
import Select from './select/select.component.tsx';

export default { title: 'Form' };

const selectFormOptions = [
  {
    value: 'option1',
    text: 'Option One'
  },
  {
    value: 'option2',
    text: 'Option Two'
  },
  {
    value: 'option3',
    text: 'Option Three'
  }
];

export const select = () => (
  <>
    <Select name="select-form" selectOptions={selectFormOptions} />
    <Select
      name="select-form"
      placeholderText="Please select an option.."
      selectOptions={selectFormOptions}
    />
    <Select
      disabled
      name="select-form"
      placeholderText="Please select an option.."
      selectOptions={selectFormOptions}
    />
  </>
);
