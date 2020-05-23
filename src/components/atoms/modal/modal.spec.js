import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import Modal from './index';

describe('Modal Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <Modal title="Test Title" isVisible />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});