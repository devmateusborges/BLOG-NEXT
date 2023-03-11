import useApi from "@/components/hooks/useApi";

const url = "http://localhost:3333/";

const getPosts = async () => {
  const { getApi } = useApi();

  const res = await getApi(`${url}posts/`, {
    cache: "no-store",
  });
  return await res.json();
};

export const BlogService = {
  getPosts,
};
