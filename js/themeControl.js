const style = document.documentElement.style;
const theme = localStorage.getItem("theme");

if(theme === 'dark'){
    setDarkTheme()
}else{
    setLightTheme()
}

function setLightTheme(){
    const sun = document.getElementById('light-button');
    const moon = document.getElementById('dark-button');
    style.setProperty('--background-color','#EEEEEE');
    style.setProperty('--secondary-color','#205375');
    style.setProperty('--call-to-action-color','#f78539');
    style.setProperty('--base-color','#000000');
    style.setProperty('--table-back-color','#EEEEEE');
    style.setProperty('--table-font-color','#000000');
    style.setProperty('--indicator',0);
    moon.style.display = 'flex'
    sun.style.display = 'none'
    localStorage.setItem("theme","light")
}

function setDarkTheme(){
    const sun = document.getElementById('light-button');
    const moon = document.getElementById('dark-button');
    style.setProperty('--background-color','#1C1C1C');
    style.setProperty('--secondary-color','#28548d');
    style.setProperty('--call-to-action-color','#F66B0E');
    style.setProperty('--base-color','#EEEEEE');
    style.setProperty('--table-back-color','#000000');
    style.setProperty('--table-font-color','#EEEEEE');
    style.setProperty('--indicator',1);
    moon.style.display = 'none'
    sun.style.display = 'flex'
    localStorage.setItem("theme","dark")
}
