export function pintarSeries(series, containerId) {
    const seriesContainer = document.getElementById(containerId);
    seriesContainer.innerHTML = ''; // Limpiar contenido previo

    series.forEach(serie => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = serie.title;

        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        col.appendChild(card);
        seriesContainer.appendChild(col);
    });
}
