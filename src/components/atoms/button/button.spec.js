import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import Button from './index';

describe('Button Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <Button buttonText="Add Item" extraClass="extraClass" />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});