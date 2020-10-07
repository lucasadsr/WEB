function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num == '') {
        window.alert('Valor inválido')
    }else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}