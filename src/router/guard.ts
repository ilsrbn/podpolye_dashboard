export const canAccess = async () => {
  const cookie = localStorage.getItem('authBearer')
  if (!cookie) return false
  try {
    const resp = await fetch('api/auth/profile', {
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