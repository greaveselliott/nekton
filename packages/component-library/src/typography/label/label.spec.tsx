import React from "react";
import { shallow } from "enzyme";

import Label from "./label.component";

test("Heading one should render correctly", () =>
  expect(shallow(<Label>abc</Label>)).toMatchSnapshot());
