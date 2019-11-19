const { getChangedFilesForRoots } = require("jest-changed-files");

// Verifica os arquivos que foram mudados no ultimo commit
// print the set of modified files since last commit in the current repo
getChangedFilesForRoots(["../5-mock-functions"], {
  lastCommit: true
}).then(result => console.log(result.changedFiles));
