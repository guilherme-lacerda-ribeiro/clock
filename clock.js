function doisDigitos(n) {
    return (n < 10) ? "0" + n : n
}

function mostraRelogio() {
    const date = new Date()
    let h = (date.getUTCHours()-3) // 0 - 23
    let m = date.getMinutes() // 0 - 59
    let s = date.getSeconds() // 0 - 59
    
    if (h==0) h=12
    if (h<0) h=24+h
    
    $('.hora').html(doisDigitos(h) + ":" + doisDigitos(m) + ":" + doisDigitos(s))

    let dia = date.getDate()
    let mes = (date.getMonth()+1)
    let ano = date.getFullYear()
    $('.data').html(doisDigitos(dia) + '/' + doisDigitos(mes) + '/' + ano)
    // $('.data').html(dia + '/' + mes + '/' + ano)
    
    setTimeout(mostraRelogio, 1000)            
}
