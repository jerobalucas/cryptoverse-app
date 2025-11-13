import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.REACT_APP_BING_SEARCH_HOST,
};

const baseUrl = process.env.REACT_APP_RAPIDAPI_NEWS_BASEURL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `api/rapid/news_search?keyword=${newsCategory}&size=${count}`
        ),
    }),
  }), 
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
