document.getElementById("buscar").addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").innerHTML = `
                <p><strong>Conselho:</strong> "${data.slip.advice}"</p>
            `;
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
            document.getElementById("resultado").innerHTML = "<p>Erro ao gerar conselho.</p>";
        });
});
