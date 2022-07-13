let userCookie = document.cookie

function redirectBasedOnUserStatus(){
    const currentPage = window.location.pathname
    if(currentPage === '/index.html'){
        if(userCookie) window.location.assign('./pagina1.html')
    }else{
        if(!userCookie) window.location.assign('./index.html')
    }
}

redirectBasedOnUserStatus()