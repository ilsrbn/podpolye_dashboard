
export const canAccess = async () => {
  const apiUrl = import.meta.env.VITE_API_URL
  const cookie = localStorage.getItem('authBearer')
  if (!cookie) return false
  try {
    const resp = await fetch(apiUrl + 'api/auth/profile', {
      headers: {
        Authorization: 'Bearer ' + cookie
      }
    })
    const token = await resp.json()
    return !!token
  } catch (e) {
    return false
  }
}