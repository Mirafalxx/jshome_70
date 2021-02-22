import axios from "axios";

export const FETCH_GOODS_REQUEST = "FETCH_GOODS_REQUEST";
export const FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS";
export const FETCH_GOODS_FAILURE = "FETCH_GOODS_FAILURE";

export const fetchGoodsRequest = () => ({ type: FETCH_GOODS_REQUEST });
export const fetchGoodsSuccess = (goods) => ({
  type: FETCH_GOODS_SUCCESS,
  goods,
});
export const fetchGoodsFailure = (error) => ({
  type: FETCH_GOODS_FAILURE,
  error,
});

export const fetchGoods = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://mirafal-larek-default-rtdb.firebaseio.com/goods.json"
      );
      const goods = Object.keys(response.data).map((id) => ({
        ...response.data[id],
        id,
      }));

      dispatch(fetchGoodsSuccess(goods));
      //   console.log(goods);
    } catch (e) {
      dispatch(fetchGoodsFailure(e));
    }
  };
};
