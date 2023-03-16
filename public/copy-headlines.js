function LoadCopyPluginFunction() {
    const h2s = document.querySelectorAll('h2')
    h2s.forEach(h2 => {
        h2.addEventListener('click', () => {
            const currentURL = window.location.href.split("?")[0].split("#")[1]
            navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${h2.id}`)
            Swal.fire({
                title: 'Copied Link to Clipboard!',
                toast: true,
                position: 'top',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        })
    })
}