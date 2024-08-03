export default async function FetchApi(url) {
  const res = await fetch(url).then((res) => res.json())
  return res
}
