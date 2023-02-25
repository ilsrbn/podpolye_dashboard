import { ApiClient } from "@client";
import { isEmpty } from 'lodash'

export const canAccess = async () => {
  const apiUrl = import.meta.env.VITE_API_URL
  const TOKEN = localStorage.getItem('authBearer')
  if (!TOKEN) return false
  const client = new ApiClient({
    BASE: apiUrl,
    TOKEN
  })
  try {
    const resp = await client.adminAuthorization.getLoggedInProfile()
    return !isEmpty(resp)
  } catch (e) {
    debugger
    console.log({ e })
    return false
  }
}