import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_REQUEST,
  FETCH_GOODS_SUCCESS,
} from "../actions/goodsActions";

const initialState = {
  goods: [],
  loading: false,
  error: false,
};

const goodsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS_REQUEST:
      return { ...state, loading: true };
    case FETCH_GOODS_SUCCESS:
      return { ...state, goods: action.goods, loading: false };
    case FETCH_GOODS_FAILURE:
      return { ...state, loading: false };
  }
  return state;
};

export default goodsReducers;
