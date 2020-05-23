import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import ProgressBar from './index';

describe('ProgressBar Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <ProgressBar percentage={10} />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});