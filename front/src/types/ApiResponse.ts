import type { AxiosResponse } from "axios"

export interface ApiResponse extends AxiosResponse {
  data: {
    success: boolean
    result: number | number[]
  }
}
