const SERVER_NAME = "https://jsonplaceholder.typicode.com/posts";

/**
 * Fetch posts data from API
 * @param {} none
 * @returns {array}
 */
async function getPost() {
  try {
    let response = await fetch(SERVER_NAME, {
      method: "GET",
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error is: ${error}`);
  }
}

/**
 * Create a post and push into server
 * @param {number} userId
 * @param {string} title
 * @param {string} body
 * @returns {object}
 */
async function postPost(userId, title, body) {
  try {
    let formData = new FormData();
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("body", body);

    let response = await fetch(SERVER_NAME, {
      method: "POST",
      body: formData,
    });
    let status = response.status;
    let responseJson = await response.json();
    return { status, responseJson };
  } catch (error) {
    console.error(`Error is: ${error}`);
  }
}

export { getPost, postPost };
