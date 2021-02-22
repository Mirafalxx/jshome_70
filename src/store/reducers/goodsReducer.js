import {
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_REQUEST,
  FETCH_GOODS_SUCCESS,
} from "../actions/goodsActions";

const initialState = {
  goods: [],
};

const goodsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS_SUCCESS:
      return { ...state, goods: action.goods };
  }
  return state;
};

export default goodsReducers;
