export interface IBigProfilesApiRetrieve {
  values: IBigProfilesApiValues[],
  logs: IBigProfilesApiLogs[]
}

export interface IBigProfilesApiLogs {
  payload: string,
  creation_datetime: string // date format "2021-07-18T10:40:59",
  response_time: number,
  response_code: number

}

export interface IBigProfilesApiValues {
  key?: number,
  creation_datetime?: string // date format "2021-07-18T10:40:00",
  total_response_time_ms?: number,
  total_requests?: number,
  total_errors?: number
}
