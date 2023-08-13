import axios from './instance'

export const getData = async () => {
  try {
    const response = await axios.get(`/formula`)
    return response.data
  } catch {
    alert('데이터 조회에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}
