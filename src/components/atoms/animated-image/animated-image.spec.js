import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import AnimatedImage from './index';

describe('Animated Image Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <AnimatedImage imageUrl="testUrl" extraClass="extraClass" showRippleEffect shouldUseRippleEffect />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});