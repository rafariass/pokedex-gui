// Estilo para tipo '#0a0a0a':
// - bg: fondo con color Tailwind #0a0a0a al 30% de opacidad (#0a0a0a4d)
// - tag: etiqueta con el mismo color al 70% de opacidad (#0a0a0ab3)
// - shadow: sombra con el color al 100% de opacidad (#0a0a0a)
const typeColors = {
  bug: '#65a30d',
  dark: '#0f172a',
  dragon: '#0e7490',
  electric: '#facc15',
  fairy: '#f472b6',
  fighting: '#92400e',
  fire: '#f97316',
  flying: '#1e40af',
  ghost: '#2e1065',
  grass: '#16a34a',
  ground: '#78350f',
  ice: '#67e8f9',
  normal: '#d1d5db',
  poison: '#9333ea',
  psychic: '#a78bfa',
  rock: '#44403c',
  steel: '#4b5563',
  water: '#3b82f6',
  default: '#0a0a0a'
}

export class ColorPicker {
  static byType (type) {
    return typeColors[type] ?? typeColors.default
  }
}
