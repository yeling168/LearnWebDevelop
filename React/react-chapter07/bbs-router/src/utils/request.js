//我们使用HTML 5 fetch 接口调用API ，在utils/request.js 中对fetch 进行了封装，定义了get、post 、
//put 三个方法，分别满足以不同HTTP 方法(Get、Post、Put)调用API的场景

function get(url) {
  return fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(response => {
      return handleResponse(url, response);
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url} . Message = ${err}`);
      return { error: { message: "Request failed." } };
    });
}

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return handleResponse(url, response);
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url} . Message = ${err}`);
      return { error: { message: "Request failed." } };
    });
}

function put(url, data) {
  return fetch(url, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      return handleResponse(url, response);
    })
    .catch(err => {
      console.error(`Request failed. Url = ${url} . Message = ${err}`);
      return { error: { message: "Request failed." } };
    });
}

function handleResponse(url, response) {
  if (response.status < 500) {
    return response.json();
  } else {
    console.error(
      `Request failed. Url = ${url} . Message = ${response.statusText}`
    );
    return { error: { message: "Request failed due to server error " } };
  }
}

export { get, post, put };
