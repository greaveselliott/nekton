import React from "react";
import { shallow } from "enzyme";

import Strong from "./strong.component";

test("Heading one should render correctly", () =>
  expect(shallow(<Strong>abc</Strong>)).toMatchSnapshot());
