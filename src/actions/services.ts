
import axios, { axiosGraphQL } from "../lib/fetcher";
import {
  CurrentUserDocument,
  CurrentUserQuery,
  CurrentUserQueryVariables,
} from "../graphql/generated/hooks";

import { AUTH_KEY } from "../constants";
export interface UploadResponseType {
  message: string;
}
export interface FileUploadInputData extends FormData {
  files: File[];
}

export interface AvatarUploadResponseType extends UploadResponseType {
  avatar: string;
}
export interface FileUploadResponseType extends UploadResponseType {
  fileId: string;
  linkId: string;
}

export const uploadAvatar = async (input: FormData) => {
  const { data } = await axios.post<AvatarUploadResponseType>(
    "/upload/avatar",
    input
  );
  return data;
};

export const uploadFiles = async (input: FormData) => {
  const { data } = await axios.post<FileUploadResponseType>("/upload", input);
  return data;
};

export const currentUser = async () => {
  try {
    const data = await axiosGraphQL<
      CurrentUserQuery,
      CurrentUserQueryVariables
    >(CurrentUserDocument, undefined)();
    return data.getCurrentUser;
  } catch (err) {
    return null;
  }
};

export const getServerSideAuthToken = () => {
  // Using dynamic import to ensure this is only loaded on the server
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { cookies } = require("next/headers");
  const cookieStore = cookies();
  return cookieStore.get(AUTH_KEY)?.value;
};

export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") {
    return getServerSideAuthToken();
  } else {
    return localStorage.getItem(AUTH_KEY);
  }
};
