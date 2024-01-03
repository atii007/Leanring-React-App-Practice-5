export function getAuthToken() {
  const token = localStorage.setItem("token");
  return token;
}
export function tokenLoader() {
  return getAuthToken;
}
