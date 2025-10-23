export default {
    async fetch(request, env) {
        try {
            // Try to fetch the requested asset
            const response = await env.ASSETS.fetch(request);

            // If file not found (404), redirect to index.html
            if (response.status === 404) {
                // Get the base URL and redirect to index.html
                const url = new URL(request.url);
                url.pathname = '/index.html';

                // Fetch index.html instead
                return env.ASSETS.fetch(new Request(url, request));
            }

            // Return the normal response for valid files
            return response;

        } catch (error) {
            // If any error occurs, serve index.html
            const url = new URL(request.url);
            url.pathname = '/index.html';
            return env.ASSETS.fetch(new Request(url, request));
        }
    },
};