const API_BASE =
    import.meta.env.VITE_API_BASE_URL ?? "https://localhost:5001";

async function getNumber(url: string): Promise<number> {
    const res = await fetch(url);

    if (!res.ok) {

        let msg = "Request failed";
        try {
            const data = await res.json();
            if (data?.error) msg = data.error;
        } catch {
            // ignore
        }
        throw new Error(msg);
    }

    return await res.json();
}

export const calculateApi = {
    add: (a: number, b: number) =>
        getNumber(`${API_BASE}/api/calculate/add?a=${a}&b=${b}`),

    subtract: (a: number, b: number) =>
        getNumber(`${API_BASE}/api/calculate/subtract?a=${a}&b=${b}`),

    multiply: (a: number, b: number) =>
        getNumber(`${API_BASE}/api/calculate/multiply?a=${a}&b=${b}`),

    divide: (a: number, b: number) =>
        getNumber(`${API_BASE}/api/calculate/divide?a=${a}&b=${b}`),

    power: (a: number, b: number) =>
        getNumber(`${API_BASE}/api/calculate/power?a=${a}&b=${b}`),

    sqrt: (a: number) =>
        getNumber(`${API_BASE}/api/calculate/sqrt?a=${a}`),
};