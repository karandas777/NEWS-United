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
} from "../action/types";

const initialState = {
  headlines: [],
  gsmarena: [],
  timesofindia: [],
  bbcnews: [],
  abcnews: [],
  cnbc: [],
  businessinsider: [],
  cnn: [],
  googlenews: [],
  natgeo: [],
  nfl: [],
  thehindu: [],
  wsj: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEADLINES:
      return {
        ...state,
        headlines: action.payload,
      };
    case GET_GSMARENA:
      return {
        ...state,
        gsmarena: action.payload,
      };
    case GET_TIMESOFINDIA:
      return {
        ...state,
        timesofindia: action.payload,
      };
    case GET_BBCNEWS:
      return {
        ...state,
        bbcnews: action.payload,
      };
    case GET_ABCNEWS:
      return {
        ...state,
        abcnews: action.payload,
      };
    case GET_CNBC:
      return {
        ...state,
        cnbc: action.payload,
      };
    case GET_BUSINESSINSIDER:
      return {
        ...state,
        businessinsider: action.payload,
      };
    case GET_CNN:
      return {
        ...state,
        cnn: action.payload,
      };
    case GET_GOOGLENEWS:
      return{
        ...state,
        googlenews:action.payload,
      }
      case GET_NATGEO:
        return{
          ...state,
          natgeo:action.payload,
        }
        case GET_NFL:
      return{
        ...state,
        nfl:action.payload,
      }
      case GET_THEHINDU:
      return{
        ...state,
        thehindu:action.payload,
      }
      case GET_WSJ:
      return{
        ...state,
        wsj:action.payload,
      }
    default:
      return state;
  }
}
