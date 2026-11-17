// Rough reading time at ~230 words per minute, minimum 1.
export function readingMinutes(body = ''): number {
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
