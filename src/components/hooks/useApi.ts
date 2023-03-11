const useApi = () => {
  const getApi = async (url: string, option: any) => {
    const result = await fetch(url, option)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error.message;
      });
    return result;
  };

  return { getApi };
};

export default useApi;
