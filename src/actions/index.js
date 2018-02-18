import * as types from './types';

export function saveComment(comment) {
  return {
    type: types.SAVE_COMMENT,
    payload: comment
  }
}
