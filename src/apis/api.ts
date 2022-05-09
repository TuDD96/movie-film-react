import { axiosRequest, errorRequest, requestLog } from "./baseRequest";

export const getRequest = async (url: string, params: any): Promise<any> => {
  try {
    const res = await axiosRequest({ url: url, method: "GET", params: params });
    // requestLog("GET", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    requestLog("GET", url, params, "err", error.response.data);
    const res = await errorRequest(error, url, "GET", params);
    if (res && res.hasOwnProperty("data")) {
      return res!;
    }

    return Promise.reject(error);
  }
};

export const postRequest = async (url: string, params: any): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "POST",
      params: params,
    });
    requestLog("GET", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    requestLog("POST", url, params, "err", error.response.data);
    const res = await errorRequest(error, url, "POST", params);
    if (res) {
      if (res.hasOwnProperty("data")) return res?.data;

      return res;
    }

    return Promise.reject(error);
  }
};

export const putRequest = async (url: string, params: any): Promise<any> => {
  try {
    const res = await axiosRequest({ url: url, method: "PUT", params: params });
    requestLog("PUT", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    // requestLog("POST", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "POST", params);
    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};

export const deleteRequest = async (url: string, params: any): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "DELETE",
      params: params,
    });
    requestLog("DELETE", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    // requestLog("DELETE", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "DELETE", params);
    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};

export const formDataPostRequest = async (
  url: string,
  params: any
): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "POST",
      params: params,
      isFormData: true,
    });
    requestLog("POST", url, params, "res", res.data);

    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return res?.data;
  } catch (error: any) {
    // requestLog("POST", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "POST", params, true);

    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};

export const formDataPutRequest = async (
  url: string,
  params: any
): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "PUT",
      params: params,
      isFormData: true,
    });
    requestLog("PUT", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    // requestLog("PUT", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "PUT", params, true);
    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};

export const formDataDeleteRequest = async (
  url: string,
  params: any
): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "DELETE",
      params: params,
      isFormData: true,
    });
    requestLog("DELETE", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    // requestLog("DELETE", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "DELETE", params, true);
    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};

export const patchRequest = async (url: string, params: any): Promise<any> => {
  try {
    const res = await axiosRequest({
      url: url,
      method: "PATCH",
      params: params,
      isFormUrlencoded: true,
    });
    requestLog("PATCH", url, params, "res", res.data);

    return res?.data;
  } catch (error: any) {
    // requestLog("PATCH", url, params, "err", error.response.data)
    const res = await errorRequest(error, url, "PATCH", params);
    if (res && res.hasOwnProperty("data")) {
      return res?.data;
    }

    return Promise.reject(error);
  }
};
