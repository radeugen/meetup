export default (value) => {
  return new Date(value).toLocaleString(['ru-RU'],{month:'short', day:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'})
}
