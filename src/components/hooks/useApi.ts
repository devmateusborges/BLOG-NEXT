import store from "../../store/index";
import { Loading } from "../../store/utilStore";
const useApi = () => {
  const getApi = async (url: string, option: any) => {
    store.dispatch(Loading(true));
    const result = await fetch(url, option)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error.message;
      })
      .finally(() => {
        store.dispatch(Loading(false));
      });

    return result;
  };

  return { getApi };
};

export default useApi;
