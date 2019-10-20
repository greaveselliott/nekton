import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Button } from '../button';

describe('Button', () => {
  it('renders as expected', () => {
    const button = mount(
      <Button type="round" style="secondary" size="small" />
    );
    expect(button).toMatchSnapshot();
  });

  it('renders a link as expected', () => {
    const button = mount(<Button href="#" type="default" style="secondary" />);
    expect(button).toMatchSnapshot();
  });

  it('renders a button elemement as default', () => {
    const button = shallow(<Button />);
    expect(button).toContainMatchingElement('button');
  });

  it('renders an anchor tag if given a href', () => {
    const button = shallow(<Button href="#" />);
    expect(button).toContainMatchingElement('a');
  });

  it('is able to call a function on click', () => {
    const mockOnClickFunction = jest.fn();
    const button = shallow(<Button onClick={mockOnClickFunction} />);
    button.simulate('click');
    expect(mockOnClickFunction).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    const button = shallow(<Button disabled={true} />);
    expect(button).toBeDisabled();
  });

  it('can render children', () => {
    const buttonText = 'Search';
    const button = shallow(<Button disabled={true}>{buttonText}</Button>);
    expect(button).toIncludeText(buttonText);
  });
});
