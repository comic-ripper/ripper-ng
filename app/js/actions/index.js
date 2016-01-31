import { CALL_API, Schemas } from '../middleware/api';

export const COMICS_REQUEST = 'COMICS_REQUEST';
export const COMICS_SUCCESS = 'COMICS_SUCCESS';
export const COMICS_FAILURE = 'COMICS_FAILURE';

export function loadComics() {
  return {
    [CALL_API]: {
      types: [COMICS_REQUEST, COMICS_SUCCESS, COMICS_FAILURE],
      endpoint: `/comics.json`,
      schema: Schemas.COMIC_ARRAY,
    },
  };
}
