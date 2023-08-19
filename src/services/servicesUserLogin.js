import axios from "axios";
/* import { useMutation } from "@tanstack/react-query"; */
import { ACCESS_TOKEN } from "../constants/localStorageConstants";
import { API_LOGIN, API_REGISTER } from "../constants/urlsConstants";

export async function loguear(loginData) {
  const json = JSON.stringify(loginData);
  const res = await axios.post(API_LOGIN, json, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status !== 200) {
    throw new Error("Invalid user and password");
  }
  return res;
}

export async function checkUser(accessToken) {
  const user = await axios.get("API-GET-USER", { Auth: accessToken });
  if (user.status !== 200) {
    throw new Error("Invalid access token. Login again");
  }
  return user;
}
export async function signin(loginData) {
  const json = JSON.stringify(loginData);
  const res = await axios.post(`API-POST-SIGNIN`, json, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status !== 200) {
    throw new Error("Invalid user and password");
  }
  return res;
}
export async function createUser(createUserData) {
  const json = JSON.stringify(createUserData);
  const res = await axios.post(API_REGISTER, json, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(res);
  return res;
}
export async function onSuccesSingin(data) {
  const accessToken = { access_token: data?.res?.access_token };
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
  checkUser(accessToken);
}

/* const checkUser = useMutation(
  async (accessToken, cb) => {
    const user = await axios.get("API-GET-USER", { Auth: accessToken });
    if (user.status !== 200) {
      throw new Error("Invalid access token. Login again");
    }
    return { user, cb };
  },
  {
    onSuccess: (data) => {
      console.log(data.user);
      data.cb(data.user);
    },
    onError: (error) => {
      console.error(`User not found. ${error}`);
    },
  }
);
const signin = useMutation(
  async (loginData, cb) => {
    const res = await axios.post(`http://localhost:3000`, { loginData });
    if (res.status !== 200) {
      throw new Error("Invalid user and password");
    }
    return { res, cb };
  },
  {
    onSuccess: (data) => {
      console.log(data.res);
      const accessToken = { access_token: data?.res?.access_token };
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
      checkUser(accessToken, data.cb);
    },
    onError: (error) => {
      console.error(`Try login again. ${error}`);
    },
  }
);
const createUser = useMutation(
  async (createUserData) => {
    const res = await axios.post("API_CREATE_USER", { createUserData });
    console.log(res);
    return res;
  },
  {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(`Error create user. ${error}`);
    },
  }
);
function loguear(data, cb) {
  signin.mutate(data, cb);
  cb(true);
}
const mutations = {
  loguear,
  createUser,
  signin,
  checkUser,
};
return mutations; */

/* export function checkUser(accessToken, fn) {
  const checking = useMutation(
    async (token, cb) => {
      const user = await axios.get("API-GET-USER", { Auth: token });
      if (user.status !== 200) {
        throw new Error("Invalid access token. Login again");
      }
      return { user, cb };
    },
    {
      onSuccess: (data) => {
        console.log(data.user);
        data.cb(data.user);
      },
      onError: (error) => {
        console.error(`User not found. ${error}`);
      },
    },
  );

  checking.mutate(accessToken, fn);
}

export function singinUser(userData, fn) {
  const signin = useMutation(
    async (loginData, cb) => {
      const res = await axios.post(`http://localhost:3000`, { loginData });
      if (res.status !== 200) {
        throw new Error("Invalid user and password");
      }
      return { res, cb };
    },
    {
      onSuccess: (data) => {
        console.log(data.res);
        const accessToken = { access_token: data?.res?.access_token };
        localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
        checkUser(accessToken, data.cb);
      },
      onError: (error) => {
        console.error(`Try login again. ${error}`);
      },
    },
  );
  signin.mutate(userData, fn);
}
export function createUser(userData, fn) {
  const create = useMutation(
    async (createUserData) => {
      const res = await axios.post("API_CREATE_USER", { createUserData });
      console.log(res);
      return res;
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.error(`Error create user. ${error}`);
      },
    },
  );
  create.mutate(userData, fn);
} */
