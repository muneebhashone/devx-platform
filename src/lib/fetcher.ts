import { getAuthToken } from "../actions/services";
import globalAxios from "axios";
import { AUTH_KEY } from "../constants";

export const getAPIEndpointGraphql = (): string => {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
  } else {
    return process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_LIVE as string;
  }
};

export const getAPIEndpointRestApi = (): string => {
  if (process.env.NODE_ENV !== "production") {
    return process.env.NEXT_PUBLIC_RESTAPI_ENDPOINT as string;
  } else {
    return process.env.NEXT_PUBLIC_RESTAPI_ENDPOINT as string;
  }
};

const axiosGraphQLInstance = globalAxios.create({
  baseURL: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

axiosGraphQLInstance.interceptors.request.use(
  function (config) {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function axiosGraphQL<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const { data: response } = await axiosGraphQLInstance.post(
      getAPIEndpointGraphql(),
      {
        query,
        variables,
      }
    );

    const { data, errors } = response;

    if (errors) {
      throw errors;
    }

    return data;
  };
}

const axios = globalAxios.create({
  baseURL: getAPIEndpointRestApi(),
});

axios.interceptors.request.use(
  function (config) {
    const token = getAuthToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getClientSideAuthToken = () => {
  return localStorage.getItem(AUTH_KEY);
};

export default axios;
