export default {
    async fetch(request, env) {
        // Cloudflare automatically serves files from the assets directory
        // This worker just passes through to your static files
        return env.ASSETS.fetch(request);
    },
};