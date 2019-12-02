// create 'dictionary' of opening-closing brackets
// find any opening brackets in string
// check remainder of string to see if closing bracket is there

const bracketPairs = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const isBalanced = (string) => {
  let chars = string.split('');

  // can't be balanced if first char is a closer
  if (bracketPairs[chars[0]]) {
    return false
  }

  let openers = [bracketPairs[0]]

  for (let i = 1; i < chars.length; i++) {
    let checkChar = chars[i]
    if (!bracketPairs[chars[i]]) {
      openers.unshift(chars.slice(i, i+1)) // add opening brackets to beginning of openers
    } else if (bracketPairs[chars[i]] === openers[0]) {
      openers.shift() // if closing bracket matches bracket to check, remove it
    } else {
      return false // return false for mismatched opening & closing brackets
    }
  }



  return true
}