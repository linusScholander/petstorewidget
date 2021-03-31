import http from "../PetStoreAPI";

const findByStatus = (status: string) => {
	return http.get(`/pet/findByStatus?status=${status}`);
};

const logger = {
	findByStatus,
};
export default logger;
