import {
  GET_HEADLINES,
  GET_GSMARENA,
  GET_TIMESOFINDIA,
  GET_BBCNEWS,
  GET_ABCNEWS,
  GET_CNBC,
  GET_BUSINESSINSIDER,
  GET_CNN,
  GET_GOOGLENEWS,
  GET_NATGEO,
  GET_NFL,
  GET_THEHINDU,
  GET_WSJ,
} from "./types";
import axios from "axios";

export const getHeadlines = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_HEADLINES,
        payload: res.data.articles,
      });
    });
};

export const getGsmarena = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?domains=gsmarena.com&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_GSMARENA,
        payload: res.data.articles,
      });
    });
};

export const getTimesofindia = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?sources=the-times-of-india&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_TIMESOFINDIA,
        payload: res.data.articles,
      });
    });
};

export const getBbcnews = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_BBCNEWS,
        payload: res.data.articles,
      });
    });
};

export const getAbcnews = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?sources=abc-news&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_ABCNEWS,
        payload: res.data.articles,
      });
    });
};

export const getCnbc = () => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?sources=cnbc&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
    )
    .then((res) => {
      dispatch({
        type: GET_CNBC,
        payload: res.data.articles,
      });
    });
};

export const getBusinessinsider = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=business-insider&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_BUSINESSINSIDER,
          payload: res.data.articles,
        });
      });
  };

export const getCnn = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=cnn&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_CNN,
          payload: res.data.articles,
        });
      });
  };

export const getGooglenews = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=google-news&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_GOOGLENEWS,
          payload: res.data.articles,
        });
      });
  };

  export const getNatgeo = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=national-geographic&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_NATGEO,
          payload: res.data.articles,
        });
      });
  };

  export const getNfl = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=nfl-news&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_NFL,
          payload: res.data.articles,
        });
      });
  };

  export const getThehindu = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=the-hindu&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_THEHINDU,
          payload: res.data.articles,
        });
      });
  };

  export const getWsj = () => (dispatch) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=the-wall-street-journal&language=en&apiKey=1391be2a50ca485897c7d7a0692320f1"
      )
      .then((res) => {
        dispatch({
          type: GET_WSJ,
          payload: res.data.articles,
        });
      });
  };
