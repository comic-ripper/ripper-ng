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


export const COMIC_REQUEST = 'COMIC_REQUEST';
export const COMIC_SUCCESS = 'COMIC_SUCCESS';
export const COMIC_FAILURE = 'COMIC_FAILURE';
export function getComic(comicId) {
  return {
    [CALL_API]: {
      types: [COMIC_REQUEST, COMIC_SUCCESS, COMIC_FAILURE],
      endpoint: `/comics/${comicId}.json`,
      schema: Schemas.COMIC,
    },
  };
}

export const CHAPTER_REQUEST = 'CHAPTER_REQUEST';
export const CHAPTER_SUCCESS = 'CHAPTER_SUCCESS';
export const CHAPTER_FAILURE = 'CHAPTER_FAILURE';
export function getChapter(chapterId) {
  return {
    [CALL_API]: {
      types: [CHAPTER_REQUEST, CHAPTER_SUCCESS, CHAPTER_FAILURE],
      endpoint: `/chapters/${chapterId}.json`,
      schema: Schemas.CHAPTER,
    },
  };
}
