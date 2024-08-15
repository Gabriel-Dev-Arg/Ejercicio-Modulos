import { series } from './modulo.js';
import { filtrarPorPlataforma } from './filter.js';
import { pintarSeries } from './pintar.js';

function initDisneyPage() {
    const disneySeries = filtrarPorPlataforma(series, 'Disney+');
    pintarSeries(disneySeries, 'seriesContainer');
}

initDisneyPage();

