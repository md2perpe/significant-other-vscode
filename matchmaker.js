const vscode = require("vscode")

const ptr = require("path-to-regexp")

const PREFIX = '~/'

function getComplementaryPath(activePath)
{
  activePath = PREFIX + activePath

  const configuration = vscode.workspace.getConfiguration("significantOther")

  for (let mapping of configuration.mappings) {
    console.log(mapping)

    let parts;

    // PROBLEM
    // Sometimes a test file also matches the source file pattern
    // The opposite isn't very probable
    // Therefore check test file pattern first
    parts = matches(activePath, PREFIX + mapping.test)
    if (parts) {
      return translate(mapping.source, parts)
    }

    parts = matches(activePath, PREFIX + mapping.source)
    if (parts) {
      return translate(mapping.test, parts)
    }
  }

  return null;
}


function matches(path, pattern)
{
  const match = ptr.match(pattern);
  const res = match(path);
  return res ? res.params : null;
}


function translate(pattern, parts)
{
  const compile = ptr.compile(pattern);
  return compile(parts);
}


module.exports = { getComplementaryPath }
