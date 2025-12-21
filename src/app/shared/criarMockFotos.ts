import { Foto } from './interfaces/foto';

export function criarMockFotos(tamanho: number): Foto[] {
  // Creates an array with X empty slots
  // Loop callback: _ ignores the element, i is the index

  const mockFotos: Foto[] = Array.from({ length: tamanho }, (_, i) => ({
    id: i + 1,
    url: `https://example.com/${i + 1}.jpg`,
    description: `Foto ${i + 1}`,
  }));

  return mockFotos;
}
