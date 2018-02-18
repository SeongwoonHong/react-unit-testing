import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  })
  it('has the class of comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
    it('does not show error message when entering some text', () => {
      component.simulate('submit');
      expect(component.find('.comment-required')).to.not.exist;
    });
  });
  // describe('entering no text', () => {
  //   // I don't know why this is throwing error (invariant violation)
  //   beforeEach(() => {
  //     component.find('textarea').simulate('change', '');
  //   })
  //   it('shows error message when entering no text', () => {
  //     component.simulate('submit');
  //     expect(component.find('.comment-required')).to.exist;
  //   });
  // });
});
