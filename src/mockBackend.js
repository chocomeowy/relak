const mockToken = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" })) + "." + 
                  btoa(JSON.stringify({ user_id: 1, username: "MockUser" })) + 
                  ".signature";

let mockJournals = [
  {
    id: 1,
    title: "Welcome to Relak",
    entry: "This is a local demo. Since the Heroku backend is no longer available, data is saved locally in your browser session so you can still test it out!",
    mood: 4,
    date: new Date().toISOString(),
    last_updated: new Date().toISOString(),
    profile: 1
  }
];

const originalFetch = window.fetch;

export const initMockBackend = () => {
  window.fetch = async (url, options) => {
    // Only intercept requests to the deprecated Heroku API
    if (typeof url !== 'string' || (!url.includes("lepak.herokuapp.com"))) {
      return originalFetch(url, options);
    }

    const { method = "GET", body } = options || {};
    const parsedBody = body ? JSON.parse(body) : null;
    
    // Simulate slight network delay for animations/loading states
    await new Promise(resolve => setTimeout(resolve, 800));

    const jsonRes = (data, status = 200) => ({
      ok: status >= 200 && status < 300,
      status,
      json: async () => data,
      text: async () => JSON.stringify(data)
    });

    if (method === "POST" && url.includes("/user/signup/")) {
      return jsonRes({ success: true });
    }

    if (method === "POST" && url.includes("/api/token/")) {
      if (parsedBody && parsedBody.username) {
        return jsonRes({ access: mockToken });
      }
      return jsonRes({ detail: "Invalid credentials" }, 401);
    }

    if (method === "GET" && url.endsWith("/journals/")) {
      return jsonRes(mockJournals);
    }

    if (method === "POST" && url.endsWith("/journals/")) {
      const newJournal = {
        id: Date.now(),
        ...parsedBody,
        date: new Date().toISOString(),
        last_updated: new Date().toISOString()
      };
      mockJournals.push(newJournal);
      return jsonRes(newJournal);
    }

    // Capture GET/PUT/DELETE /journals/:id/
    const match = url.match(/\/journals\/(\d+)\//);
    if (match) {
      const id = parseInt(match[1]);
      const idx = mockJournals.findIndex(j => j.id === id);
      
      if (method === "GET") {
        if (idx !== -1) return jsonRes(mockJournals[idx]);
        return jsonRes({ detail: "Not found" }, 404);
      }
      if (method === "PUT") {
        if (idx !== -1) {
          mockJournals[idx] = { 
            ...mockJournals[idx], 
            ...parsedBody, 
            last_updated: new Date().toISOString() 
          };
          return jsonRes(mockJournals[idx]);
        }
      }
      if (method === "DELETE") {
        if (idx !== -1) {
          mockJournals.splice(idx, 1);
        }
        return jsonRes({}, 204);
      }
    }

    return jsonRes({ detail: "Endpoint not found" }, 404);
  };
};
