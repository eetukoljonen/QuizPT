
export const showNotification = (setAlert, msg) => {
  setAlert(msg)
  setTimeout( () => {
    setAlert('')
  }, 5000)
}