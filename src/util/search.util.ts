export function filterSearchWord(word: string) {
  if (word === '') {
    return ''
  }
  if (word.indexOf(' ') !== -1) {
    return word.replace(/ /g, '+')
  }
  return word
}
