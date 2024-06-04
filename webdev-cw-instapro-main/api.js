// Замени на свой, чтобы получить независимый от других набор данных.
// "боевая" версия инстапро лежит в ключе prod
// https://wedev-api.sky.pro/api/v1/artyom-vagin/instapro
const personalKey = "artyom-vagin";
const baseHost = "https://wedev-api.sky.pro";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;
const userPostsHost = `${postsHost}/user-posts/`;

export let token;

export const setToken = (newToken) => {
  token = newToken;
};

export function getPosts({ token }) {
  return fetch(postsHost, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

export function getUserPosts({ token, id }) {
  return fetch(userPostsHost + id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user posts");
      }
      return response.json();
    })
    .then((data) => {
      return data.posts;
    });
}

// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F
export function registerUser({ login, password, name, imageUrl }) {
  return fetch(baseHost + "/api/user", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
      imageUrl,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to register user");
    }
    return response.json();
  });
}

export function loginUser({ login, password }) {
  return fetch(baseHost + "/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to login user");
    }
    return response.json();
  });
}

export function uploadImage({ file }) {
  const data = new FormData();
  data.append("file", file);

  return fetch(baseHost + "/api/upload/image", {
    method: "POST",
    body: data,
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    return response.json();
  });
}

export function onAddPostClick({ token, description, imageUrl }) {
  return fetch(postsHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description,
      imageUrl,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to add post");
    }
    return response.json();
  });
}

export function onAddLikeClick({ token, id }) {
  return fetch(`${postsHost}/${id}/like`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to add like");
    }
    return response.json();
  });
}

export function onDisLikeClick({ token, id }) {
  return fetch(`${postsHost}/${id}/dislike`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to dislike");
    }
    return response.json();
  });
}