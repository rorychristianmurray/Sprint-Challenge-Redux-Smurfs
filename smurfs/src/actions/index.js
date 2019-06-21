/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCES";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCES";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCES";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log("getSmurfs response.data", response.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("getSmurfs error", error);
      dispatch({
        type: FETCH_SMURF_ERROR,
        payload: error.response.data.error
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      console.log("addSmurfs response.data", response.data);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addSmurfs error", error);
      dispatch({
        type: ADD_SMURF_ERROR,
        payload: error
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete("http://localhost:3333/smurfs/:id", id)
    .then(response => {
      console.log("deleteSmurfs response.data", response.data);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("addSmurfs error", error);
      dispatch({
        type: DELETE_SMURF_ERROR,
        payload: error
      });
    });
};
