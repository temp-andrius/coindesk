import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Time from './Time';

describe('<Time />', () => {
  let time;

  afterEach(() => {
    time.unmount();
  });

  it('should have a component Paragraph as styled.p', () => {
    time = shallow(<Time now />);
    expect(time.name()).toBe('styled.p');
  });

  it('component Paragraph should have a correct CSS style', () => {
    time = TestRenderer.create(<Time now />);
    const tree = time.toJSON();
    expect(tree).toHaveStyleRule('font-size', '12px');
    expect(tree).toHaveStyleRule('color', '#71757a');
    expect(tree).toHaveStyleRule('margin-bottom', '0');
    expect(tree).toHaveStyleRule('width', '98%');
    expect(tree).toHaveStyleRule('padding-left', '5px');
  });

  it('should have a current time with explanation', () => {
    time = shallow(<Time now explanation="Something explanation" />);
    expect(time.text()).toEqual(expect.stringMatching(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} GMT\+\d{1} : Something explanation$/
    ));
  });

  it('should have a timestamp with explanation', () => {
    time = shallow(
      <Time
        coindesk
        timestamp="Nov 16, 2019 17:29:00 UTC"
        explanation="Something explanation"
      />
    );
    expect(time.text()).toBe('2019-11-16 19:29:00 GMT+2 : Something explanation');
  });
});
