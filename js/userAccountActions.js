const resultMessage = document.getElementById('result-container')

let loginData = {
    user: '',
    password: ''
}

const handleChange = e =>{
    const userInput = document.getElementById('user')
    const userError = document.getElementById('user-error')
    userError.style.display = 'none'
    userInput.style.borderColor = ''
    const field = e.target.name
    const value = e.target.value
    if(field === 'user'){
        const userRegex = /[a-zA-Z]$/
        const isLetters = userRegex.test(value)
        if(!isLetters){
            userInput.style.borderColor = 'red'
            userError.style.display = 'block'
        }
    }
    loginData[field] = value.toString()
    resultMessage.style.display = 'none'
}

const logIn = async e => {
    e.preventDefault()
    try {
        let fetched_users = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await fetched_users.json()
        let selectedUser = users.find(user => user.username === loginData.user)
        if (selectedUser) {
            if (selectedUser.id == loginData.password) {
                const d = new Date();
                d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000)
                let expiration = d.toUTCString()
                document.cookie = `user=${JSON.stringify(selectedUser)};expires=${expiration}`
                window.location.assign('./pagina1.html')
                return
            }
            resultMessage.style.display = 'flex'
            resultMessage.innerHTML = "¡Ups! Usuario o contraseña incorrectos."
            return
        }
        resultMessage.style.display = 'flex'
        resultMessage.innerHTML = "¡Ups! Usuario o contraseña incorrectos."
    } catch (error) {
        resultMessage.style.display = 'flex'
        resultMessage.innerHTML = "Ocurrio un error en la conexion"
        console.log(error)
    }
}

const logOut = () => {
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
    window.location.assign('./index.html')
}