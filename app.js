const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

// Click tracking: counts a tap on each outbound link (GoatCounter)
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', () => {
        if (!window.goatcounter || !window.goatcounter.count) return
        const name = (link.querySelector('.deal-name')?.textContent
            || link.title
            || link.querySelector('p')?.textContent
            || link.href).trim()
        window.goatcounter.count({
            path: 'click-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            title: name,
            event: true,
        })
    })
})

