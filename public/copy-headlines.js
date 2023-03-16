function LoadCopyPluginFunction() {
    const h1s = document.querySelectorAll('h1')
    const h2s = document.querySelectorAll('h2')
    const h3s = document.querySelectorAll('h3')
    const h4s = document.querySelectorAll('h4')

    h1s.forEach(header => {
        header.addEventListener('click', () => {
            const currentURL = window.location.href.split("?")[0].split("#")[1]
            navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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

    h2s.forEach(header => {
        header.addEventListener('click', () => {
            const currentURL = window.location.href.split("?")[0].split("#")[1]
            navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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

    h3s.forEach(header => {
        header.addEventListener('click', () => {
            const currentURL = window.location.href.split("?")[0].split("#")[1]
            navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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

    h4s.forEach(header => {
        header.addEventListener('click', () => {
            const currentURL = window.location.href.split("?")[0].split("#")[1]
            navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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

    window.addEventListener('hashchange', () => {
        const h1s_new = document.querySelectorAll('h1')
        const h2s_new = document.querySelectorAll('h2')
        const h3s_new = document.querySelectorAll('h3')
        const h4s_new = document.querySelectorAll('h4')
        

        h1s_new.forEach(header => {
            header.addEventListener('click', () => {
                const currentURL = window.location.href.split("?")[0].split("#")[1]
                navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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
    
        h2s_new.forEach(header => {
            header.addEventListener('click', () => {
                const currentURL = window.location.href.split("?")[0].split("#")[1]
                navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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
    
        h3s_new.forEach(header => {
            header.addEventListener('click', () => {
                const currentURL = window.location.href.split("?")[0].split("#")[1]
                navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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
    
        h4s_new.forEach(header => {
            header.addEventListener('click', () => {
                const currentURL = window.location.href.split("?")[0].split("#")[1]
                navigator.clipboard.writeText(`https://docs.neiki.dev/#${currentURL}?id=${header.id}`)
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
    })
}