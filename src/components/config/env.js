const env = {
	dev: {},
	local: {
		BASE_URL: "http://localhost:5000",
	},
	prod: {},
};
let temp_env_config = {};
if (window.location.href.includes("localhost")) {
	temp_env_config = env.local;
}

export const env_config = temp_env_config;