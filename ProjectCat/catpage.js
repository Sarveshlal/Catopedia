
var a = fetch(`https://api.thecatapi.com/v1/breeds?limit=67&api_key=f1f6ad5f-fece-453b-b716-0a3ea6c3637b`)
a.then((b) => {
    return b.json();
}).then((b) => {
    let data = b;
    console.log(data)
    var k = 0;
    var container = document.createElement('div')
    container.setAttribute('class', 'container-fluid p-4 col-sm-3 col-lg-12')
    container.setAttribute('id', 'container')
    var cardcolumns = document.createElement('div')
    cardcolumns.setAttribute('class', 'card-columns')
    for (var i = 0; i < 67; i++) {
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        var img = document.createElement('img')
        img.setAttribute('src', data[k].image.url)
        img.setAttribute('class', 'card-img-top')
        img.setAttribute('width', '800px')
        img.setAttribute('style', 'border-radius: 50px;')
        var cardbody = document.createElement('div')
        cardbody.setAttribute('class', 'card-body')
        var h5 = document.createElement('h5')
        h5.setAttribute('class', 'card-title')
        h5.innerText = data[k].name
        var span = document.createElement('span')
        span.setAttribute('class', 'card-text')
        span.innerHTML = `<img src="https://img.icons8.com/plumpy/24/000000/hourglass-sand-bottom.png"/>` + '  ' + data[k].life_span + " Yrs | Origin: " + data[k].origin
        var br = document.createElement('div')
        br.innerHTML = "<br>"
        var button = document.createElement('button')
        button.setAttribute('id', 'details')
        button.setAttribute('type', 'button')
        button.setAttribute('class', 'btn btn-primary btn-lg btn-block')
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', `#staticBackdrop${k}`)
        button.innerHTML = 'Details'
        var modalfade = document.createElement('div')
        modalfade.setAttribute('class', 'modal fade')
        modalfade.setAttribute('id', `staticBackdrop${k}`)
        modalfade.setAttribute('style', '')
        modalfade.setAttribute('data-backdrop', 'static')
        modalfade.setAttribute('data-keyboard', 'false')
        modalfade.setAttribute('tabindex', '-1')
        modalfade.setAttribute('aria-labelledby', 'staticBackdropLabel')
        modalfade.setAttribute('aria-hidden', 'true')
        var modaldialog = document.createElement('div')
        modaldialog.setAttribute('class', 'modal-dialog')
        var modalcontent = document.createElement('div')
        modalcontent.setAttribute('class', 'modal-content')
        var modalheader = document.createElement('div')
        modalheader.setAttribute('class', 'modal-header')
        var h4 = document.createElement('h5')
        h4.setAttribute('class', 'staticBackdropLabel')
        h4.innerText = data[k].name
        var button1 = document.createElement('button')
        button1.setAttribute('type', 'button')
        button1.setAttribute('class', 'close')
        button1.setAttribute('data-dismiss', 'modal')
        button1.setAttribute('aria-label', 'Close')
        button1.innerHTML = '<span aria-hidden="true">&times;</span>'
        modalheader.append(h4, button1)
        var modalbody = document.createElement('div')
        modalbody.setAttribute('class', 'modal-body')
        var dietlabels = document.createElement('p')
        dietlabels.innerHTML = `<h5>Description:</h5>${data[k].description}`
        var incredient = document.createElement('p')
        var hl = document.createElement('p')
        hl.innerHTML = `<h5>Temperament:</h5>${data[k].temperament}`
        incredient.innerHTML = `<h5>Vetstreet URL:</h5>${data[k].vetstreet_url}<br><br><h5>Wikipedia URL</h5>${data[k].wikipedia_url}`
        modalbody.append(dietlabels, hl, incredient)
        var modalfooter = document.createElement('div')
        modalfooter.setAttribute('class', 'modal-footer')
        var butt = document.createElement('button')
        butt.setAttribute('type', 'button')
        butt.setAttribute('class', 'btn btn-secondary')
        butt.setAttribute('data-dismiss', 'modal')
        butt.innerText = 'Close'
        modalfooter.append(butt)
        modalcontent.append(modalheader, modalbody, modalfooter)
        modaldialog.appendChild(modalcontent)
        modalfade.appendChild(modaldialog)
        cardbody.append(h5, span, br, button, modalfade)
        card.append(img, cardbody)
        cardcolumns.append(card)
        container.appendChild(cardcolumns)
        document.body.append(container)
        k++
    }
})
    .catch((error) => {
        console.log(error)
    })

