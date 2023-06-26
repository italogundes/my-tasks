export const API_URL = 'http://localhost:5000';

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/sessions',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token, id) => {
  return {
    url: API_URL + `/users/${id}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const CREATE_USER = (body, token) => {
  return {
    url: API_URL + '/users',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};
