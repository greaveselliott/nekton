import React from 'react';
import { shallow } from 'enzyme';

import Label from './label.component';

test('Label component renders correctly', () =>
  expect(shallow(<Label>abc</Label>)).toMatchSnapshot());
