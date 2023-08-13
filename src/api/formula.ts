import axios from './instance'

export const getDatas = async () => {
  try {
    const response = await axios.get(`/formula`)
    return response.data
  } catch {
    alert('데이터 조회에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

export const getData = async (id: number) => {
  try {
    const response = await axios.get(`/formula/${id}`)
    return response.data
  } catch {
    alert('데이터 조회에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

type dataType = {
  title: string
  content: string
  latex: string
  time?: number
}

export const postData = async (data: dataType) => {
  try {
    await axios.post(`/formula`, data)
    return 'success'
  } catch {
    alert('질문 작성에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

export const patchData = async (id: number, data: dataType) => {
  try {
    const response = await axios.patch(`/formula/${id}`, data)
    return response.data
  } catch {
    alert('질문 작성에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}
