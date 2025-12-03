import axios from "axios";

const options = {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
    timeout: 10000,
}

const API = axios.create(options);

API.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const { data, status } = error.response;
        console.log(data, "data");
        if (data.errorCode === "undefined" && status === 401) {
            try {

            } catch (error) {

            }
        }

        return Promise.reject({
            ...data,
        });

    }
)

export default API; 