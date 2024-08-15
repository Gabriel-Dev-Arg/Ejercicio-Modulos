import { series } from './modulo.js';
import { filtrarPorPlataforma } from './filter.js';
import { pintarSeries } from './pintar.js';

function initHboPage() {
    const hboSeries = filtrarPorPlataforma(series, 'HBO');
    pintarSeries(hboSeries, 'seriesContainer');
}

initHboPage();
