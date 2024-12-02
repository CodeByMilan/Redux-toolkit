import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const initialState = {
  blogs: [],
  status: null,
  blog:null
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    setBlog(state, action) {
      state.blog = action.payload;
    },
    
  },
});
export const { setStatus, setBlog ,setBlogs} = blogSlice.actions;
export default blogSlice.reducer;

export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      console.log("hello");
      const response = await API.post(`/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status == 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`/blog`);
      if (response.status == 200) {
        dispatch(setBlogs(response.data.data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function deleteBlog(id, token) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status == 200) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function updateBlog(id, token, data) {
  return async function updateBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.patch(`/blog/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status == 201) {
        dispatch(setBlog(response.data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function getBlog(id) {
  return async function getBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.get(`/blog/${id}`);
      if (response.status == 200) {
        dispatch(setBlog(response.data.data));
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
