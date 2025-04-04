import { createSlice } from "@reduxjs/toolkit";

const getUserBookmarks = (userId) => {
  const stored = localStorage.getItem(`bookmarks_${userId}`);
  return stored ? JSON.parse(stored) : [];
};

const saveUserBookmarks = (userId, bookmarks) => {
  localStorage.setItem(`bookmarks_${userId}`, JSON.stringify(bookmarks));
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    initializeBookmarks: (state, action) => {
      return action.payload;
    },
    addBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeBookmark: (state, action) => {
      return state.filter(game => game.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark, initializeBookmarks } = bookmarkSlice.actions;

export const loadBookmarksForUser = (userId) => (dispatch) => {
  const bookmarks = getUserBookmarks(userId);
  dispatch(initializeBookmarks(bookmarks));
};

export const saveBookmarksForUser = (userId, bookmarks) => {
  saveUserBookmarks(userId, bookmarks);
};

export default bookmarkSlice.reducer;
