import React from 'react';
import { shallow } from 'enzyme';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';
import Error from './Error';

describe('<Error />', () => {
  let Message;

  beforeEach(() => {
    Message = shallow(<Error />);
  });

  afterEach(() => {
    Message.unmount();
  });

  it('should have a component Message as styled.div', () => {
    expect(Message.name()).toBe('styled.div');
  });

  it('component Message should have a correct CSS style', () => {
    Message = TestRenderer.create(<Error />);
    const tree = Message.toJSON();
    expect(tree).toHaveStyleRule('background-color', '#f8d7da');
    expect(tree).toHaveStyleRule('border-color', '#f5c6cb');
    expect(tree).toHaveStyleRule('border-radius', '4px');
    expect(tree).toHaveStyleRule('color', '#721c24');
    expect(tree).toHaveStyleRule('padding', '10px');
  });

  describe('component Message should contain', () => {
    beforeEach(() => {
      Message = shallow(<Error message="Something error" />);
    });

    it('first child as html element', () => {
      expect(Message.childAt(0).html()).toBe('<strong>Error: </strong>');
    });

    it('correct text', () => {
      expect(Message.text()).toBe('Error: Something error');
    });
  });
});
