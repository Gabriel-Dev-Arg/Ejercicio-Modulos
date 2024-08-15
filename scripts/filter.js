export function filtrarPorPlataforma(series, plataforma) {
    return series.filter(serie => serie.platform === plataforma && serie.isStreaming);
}
