function attachGradientEvents() {
    let gradientElement =document.getElementById('gradient')
    let resultElement = document.getElementById('result')

    const gradientMouseoverHandler = (e) => {
        console.log(e.target.offsetWidth);
        console.log(e.offsetX);
        let percent =Math.floor((e.offsetX /e.target.offsetWidth) * 100);
        resultElement.textContent = `${percent }%`;
    }

    gradientElement.addEventListener('mousemove',gradientMouseoverHandler )

}