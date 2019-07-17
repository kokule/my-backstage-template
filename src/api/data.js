import axios from '@/libs/api.request'

export const getTableData = (params) => {
  return axios.request({
    url: 'get_table_data',
    method: 'get',
    params
  })
}
