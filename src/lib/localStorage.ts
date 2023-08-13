const isBrowser = () => typeof window !== 'undefined'

export const saveUserIdToLocalStorage = (userId: string) => {
  if (isBrowser()) {
    try {
      localStorage.setItem('userId', userId)
    } catch (error) {
      console.error('Error saving userId to local storage:', error)
    }
  }
}

export const getUserIdFromLocalStorage = () => {
  if (isBrowser()) {
    try {
      return localStorage.getItem('userId')
    } catch (error) {
      return console.error('Error getting userId to local storage:', error)
    }
  }
  return console.error(`it dose not have a browser storage`)
}

export const removeUserIdFromLocalStorage = () => {
  if (isBrowser()) {
    try {
      localStorage.removeItem('userId')
    } catch (error) {
      console.error('Error removing userId from local storage:', error)
    }
  }
}
