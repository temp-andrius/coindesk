import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Loading from './Loading';

describe('<Loading />', () => {
  let loading;

  beforeEach(() => {
    loading = TestRenderer.create(<Loading />);
  });

  afterEach(() => {
    loading.unmount();
  });

  it('should have a correct CSS style', () => {
    const tree = loading.toJSON();
    expect(tree).toHaveStyleRule('border', '5px solid #f3f3f3');
    expect(tree).toHaveStyleRule('border-top-color', '#3498db');
    expect(tree).toHaveStyleRule('border-radius', '50%');
    expect(tree).toHaveStyleRule('animation', 'iECmZH 1s linear infinite');
    expect(tree).toHaveStyleRule('width', '50px');
    expect(tree).toHaveStyleRule('height', '50px');
  });
});
