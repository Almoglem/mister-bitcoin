import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const utilService = {
    makeId,
    showMsg
}

function makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }

function showMsg(msg){
    MySwal.fire({
  title: <p>{msg}</p>,
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 2000
    })
}
