import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  article: {},
  articles: [],
  error: null,
  loading: false,
  success: false,
  isUppdated: false,
};

export const getAllArticlesAction = createAsyncThunk(
  "article/fetchAll",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      //make the request
      const { data } = await axios.get(
        `https://adawati-api.onrender.com/api/v1/articles`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const addNewArticleAction = createAsyncThunk(
  "article/add-new-article",
  async (
    { nameArticle, refArticle, categoryId, marqueId },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      //make the request
      const { data } = await axios.post(
        `http://localhost:5500/api/v1/articles/add-article`,
        { nameArticle, refArticle, categoryId, marqueId }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updateArticleAction = createAsyncThunk(
  "article/update-article",
  async (
    { _id, nameArticle, refArticle, categoryId, marqueId },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      //make the request
      const { data } = await axios.put(
        `http://localhost:5500/api/v1/articles/${_id}`,
        { nameArticle, refArticle, categoryId, marqueId }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteArticleAction = createAsyncThunk(
  "article/delete-article",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5500/api/v1/articles/${id}/delete`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getOneArticleAction = createAsyncThunk(
  "article/fetchOne",
  async (articleId, { rejectWithValue, getState, dispatch }) => {
    try {
      //make the request
      const { data } = await axios.get(
        `http://localhost:5500/api/v1/articles/${articleId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    //fetch items
    builder.addCase(getAllArticlesAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAllArticlesAction.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getAllArticlesAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    //fetch one item
    builder.addCase(getOneArticleAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getOneArticleAction.fulfilled, (state, action) => {
      state.article = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getOneArticleAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    //add new Item
    builder.addCase(addNewArticleAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addNewArticleAction.fulfilled, (state, action) => {
      state.article = action.payload;
      state.loading = false;
    });
    builder.addCase(addNewArticleAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    //update Item
    builder.addCase(updateArticleAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateArticleAction.fulfilled, (state, action) => {
      state.article = action.payload;
      state.loading = false;
      state.isUppdated = true;
    });
    builder.addCase(updateArticleAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

// gen reducer

const articlesReducer = articlesSlice.reducer;

export default articlesReducer;
