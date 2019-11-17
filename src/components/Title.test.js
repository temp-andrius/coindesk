import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from './Title';

describe('<Title />', () => {
  let Heading;

  beforeEach(() => {
    Heading = shallow(<Title icon="Something icon" name="Something name" />);
  });

  afterEach(() => {
    Heading.unmount();
  });

  it('should have a component Heading as styled.h1', () => {
    expect(Heading.name()).toBe('styled.h1');
  });

  it('component Heading should have a correct CSS style', () => {
    Heading = TestRenderer.create(<Title />);
    const tree = Heading.toJSON();
    expect(tree).toHaveStyleRule('width', '100%');
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toHaveStyleRule('justify-content', 'center');
    expect(tree).toHaveStyleRule('align-items', 'center');
  });

  describe('component Heading should contain', () => {
    it('first child as component Icon as styled.img', () => {
      expect(Heading.childAt(0).name()).toBe('styled.img');
    });

    describe('component Icon', () => {
      it('should have a correct CSS style', () => {
        const Icon = TestRenderer.create(Heading.childAt(0).getElement());
        const tree = Icon.toJSON();
        expect(tree).toHaveStyleRule('max-width', '50px');
        expect(tree).toHaveStyleRule('margin-right', '10px');
        Icon.unmount();
      });

      it('should have a correct properties', () => {
        const Icon = Heading.childAt(0);
        expect(Icon.props()).toHaveProperty('src', 'Something icon');
        expect(Icon.props()).toHaveProperty('alt', 'Icon');
      });
    });

    it('should have a correct text', () => {
      expect(Heading.text()).toBe('Something name Price');
    });
  });
});
