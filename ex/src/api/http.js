import axios from "axios";

// axios 객체 생성
export default axios.create({
  baseURL: "http://localhost:9999/vue",
  headers: {
    "Content-type": "application/json",
  },
});

function apiInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:9999/vue",
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

function houseInstance() {
  const instance = axios.create({
    baseURL:
      "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev",
    headers: {
      "Content-type": "application/json",
    },
  });
  return instance;
}

export { apiInstance, houseInstance };
