import { ApiError } from "@/api";



export const processError = (e: any) => {

  console.log({ e })
  if (e instanceof ApiError) {
    if (e.status === 401) {
      // router.push({name: 'login'})
    }
    else if (e.status === 400) {
      return e.body.message
    }
    return e.message
  }
}