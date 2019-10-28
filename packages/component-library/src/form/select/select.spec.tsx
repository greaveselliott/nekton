import React from 'react';
import { shallow } from 'enzyme';
import Select from './select.component';

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

describe('Select', () => {
  it('renders a select element with placeholder text', () => {
    expect(
      shallow(
        <Select
          placeholderText="placeholder"
          selectOptions={selectFormOptions}
        />
      )
    ).toMatchSnapshot();
  });

  it('can render a disabled select element', () => {
    expect(
      shallow(
        <Select
          disabled
          placeholderText="placeholder"
          selectOptions={selectFormOptions}
        />
      )
    ).toMatchSnapshot();
  });

  it('can render a select element', () => {
    expect(
      shallow(<Select name="test-select" selectOptions={selectFormOptions} />)
    ).toMatchSnapshot();
  });
});
