import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Button', () => {
  it('renders as expected', () => {
    expect(
      shallow(<Button type="round" style="secondary" size="small" />)
    ).toMatchSnapshot();
  });

  it('renders a link as expected', () => {
    expect(
      shallow(<Button href="#" type="default" style="secondary" />)
    ).toMatchSnapshot();
  });

  it('renders a button elemement as default', () => {
    expect(shallow(<Button />)).toContainMatchingElement('button');
  });

  it('renders an anchor tag if given a href', () => {
    expect(shallow(<Button href="#" />)).toContainMatchingElement('a');
  });

  it('is able to call a function on click', () => {
    const mockOnClickFunction = jest.fn();
    const button = shallow(<Button onClick={mockOnClickFunction} />);
    button.simulate('click');
    expect(mockOnClickFunction).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    expect(shallow(<Button disabled />)).toBeDisabled();
  });

  it('can render children', () => {
    expect(shallow(<Button disabled>abc</Button>)).toIncludeText('abc');
  });
});
