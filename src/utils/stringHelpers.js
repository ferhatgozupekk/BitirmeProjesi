export function turkceIHarfiDuzelt(metin) {
  return metin.replace(/I/g, "ı").replace(/İ/g, "i").toLowerCase();
}
