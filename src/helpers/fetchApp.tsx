export const apiCall = (method: any, url: any, body: any) => {

    const myHeaders = new Headers({
        "Content-Type": "application/json",
      });

    return fetch(url, {
        method,
        body,
        headers: myHeaders,
    }).then((response: any) => response.json());
}