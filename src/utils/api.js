const ENDPOINT = "https://cdn.jsdelivr.net/gh/abbassiddiqi/airbnb-api@bbd1300a/flats.json";

const getData = async () => {
  try {
    const resp = await fetch(ENDPOINT);
    if (resp.status === 200) {
      return await resp.json();
    }
  } catch (err) {
    console.log(err);
  }
};
export { getData };
