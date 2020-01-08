let controller = new AbortController();const abort = () => controller.abort();
function App() {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    controller = new AbortController(); setUrl();
    setError(false);
    setLoading(true);
    return fetch(
      "./anil.json",
      { signal: controller.signal } ).then(r => r.blob())
      .then(blob => setUrl(URL.createObjectURL(blob)))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  };