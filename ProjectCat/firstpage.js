function word() {
    var word = document.getElementById("input");
    var strUser = word.options[word.selectedIndex].value;
    console.log(strUser)
    var a = fetch(`https://api.thecatapi.com/v1/breeds/search?q=${strUser}`)
    .then((b) => {
        return b.json()
    }).then((b) => {
        let data = b;
        sessionStorage.setItem('url', data[0].wikipedia_url)
    })
}
try {
    var a = fetch(`https://api.thecatapi.com/v1/breeds?limit=67&api_key=f1f6ad5f-fece-453b-b716-0a3ea6c3637b`)
    a.then((b) => {
        return b.json();
    }).then((b) => {
        let data = b, k = 0;
        var container = a("div", 'container col col-sm-12 col-lg-6')
        var row = a('div', 'row')
        var col = a('div', 'col-6')
        var h5 = document.createElement('h5')
        h5.innerText = "Search by Cat Name"
        var inputgrp = a('div', 'input-group')
        var select = a('select', 'custom-select')
        select.setAttribute('id', 'input')
        select.setAttribute('onchange', 'word()')
        for (var i = 0; i < 67; i++) {
            var option = document.createElement('option')
            option.setAttribute('value', data[k].name)
            option.innerText = data[k].name;
            select.append(option)
            k++
        }
        var button = a('div', 'input-group-append')
        button.innerHTML = `<a class="btn btn-primary" href='${sessionStorage.getItem('url')}' role="button">Search</a>`
        sessionStorage.removeItem('url')
        inputgrp.append(select, button)
        col.append(h5, inputgrp)
        row.append(col)
        container.append(row)
        document.body.append(container)
        function a(tg, cls) {
            var val = document.createElement(tg)
            val.setAttribute('class', cls)
            return val
        }
    })
} catch (e) {
    console.log(e)
}
