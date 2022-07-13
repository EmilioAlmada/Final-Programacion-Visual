const centerName = document.getElementById('user-name')
const user = JSON.parse(getCookie('user'))
centerName.innerHTML = user.name