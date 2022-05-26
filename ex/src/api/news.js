import { apiInstance } from "./http.js";

const api = apiInstance();

function crawling(success, fail) {
  api.get(`/news/crawl`).then(success).catch(fail);
}

function crawling2(success, fail) {
  api.get(`/news/crawl2`).then(success).catch(fail);
}

export { crawling, crawling2 };
