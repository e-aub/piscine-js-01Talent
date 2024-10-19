async function getJSON(path = '', params = {}) {
    params = new URLSearchParams(params)
    const queryString = params.toString()
    const fullURL = `${path}?${queryString}`;

    const res = await fetch(fullURL).then((resp) => {
        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error(resp.statusText)
        }
    });

    if (res.error) {
        throw new Error(res.error)
    }
    return res.data
}