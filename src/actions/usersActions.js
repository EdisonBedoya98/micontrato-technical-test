import axios from "axios";
import { LOADING, ERROR, GET_USERS, SET_PAGES_NUMBER } from "@types/usersTypes";

export const getUsers = (page) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const { data: response } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );

    dispatch({
      type: SET_PAGES_NUMBER,
      payload: response.total_pages,
    });
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "Something went wrong, please try again",
    });
  }
};
