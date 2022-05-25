import { apiInstance } from "./http.js";

const api = apiInstance();

function crawling(success, fail) {
  api.get(`/news/crawl`).then(success).catch(fail);
}

export { crawling };
