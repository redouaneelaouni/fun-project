const panels = document.querySelectorAll('.panel');

const expand = (panel) => {

    if (!panel.classList.contains('active')) {

        panels.forEach(panelActive => {
            if (panelActive.classList.contains('active')) {
                panelActive.classList.remove('active')
            }
        })

        panel.classList.add('active');

    }

}

panels.forEach(panel => {

    panel.addEventListener('click', () => expand(panel))
})