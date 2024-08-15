import { series } from './modulo.js';
import { filtrarPorPlataforma } from './filter.js';
import { pintarSeries } from './pintar.js';

function initNetflixPage() {
    const netflixSeries = filtrarPorPlataforma(series, 'Netflix');
    pintarSeries(netflixSeries, 'seriesContainer');
}

initNetflixPage();
