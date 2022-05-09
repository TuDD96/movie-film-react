import axios, { AxiosRequestConfig } from "axios";
// import moment from "moment";
import { StatusCode } from "../configs/StatusCode";

export const axiosRequest = async ({
  url,
  method,
  params,
  isFormData,
  isFormUrlencoded,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params: any;
  isFormData?: boolean;
  isFormUrlencoded?: boolean;
}) => {
  // const bearerToken = Storage.getString("token")
  if (method === "PUT") {
    method = "POST";
    url = `${url}?_method=PUT`;
  }
  const header = {
    "Content-Type": isFormData
      ? "multipart/form-data"
      : isFormUrlencoded
      ? "application/x-www-form-urlencoded'"
      : "application/json",
    // Authorization: `Bearer ${bearerToken}`,
  };
  const bodyRequest: AxiosRequestConfig = {
    method: method,
    url: url,
    withCredentials: false,
    headers: header,
    timeout: 10000,
  };

  if (isFormData) {
    bodyRequest.data = params;
  } else {
    bodyRequest.params = params;
  }

  return await axios(bodyRequest);
};

export const errorRequest = async (
  error: any,
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  params: any,
  isFormData: boolean = false
): Promise<any> => {
  const responseError = error?.response!;
  if (responseError?.status! === StatusCode.HTTP_401) {
  } else if (error) {
  }
};

export const requestLog = (
  method: string = "",
  url: string = "",
  data: unknown,
  type: "req" | "res" | "err",
  error?: {}
) => {
  const colors = { req: "blue", res: "green", err: "red" };
  const icons = { req: ">>>", res: "<<<", err: "xxx" };
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  console.log(
    `${time} %c[${
      icons[type]
    }] [${method.toUpperCase()}] [${type.toUpperCase()}]  | %c${url} \n`,
    `color: ${colors[type]}; font-weight: bold`,
    "color: violet; font-weight: bold",
    "params: ",
    data,
    "\n",
    "response: ",
    error
  );
};
