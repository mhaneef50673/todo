import React from 'react';
import { mount } from 'enzyme';
import { mountToJson} from 'enzyme-to-json';
import LoaderView from './index';

describe('LoaderView Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <LoaderView />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});