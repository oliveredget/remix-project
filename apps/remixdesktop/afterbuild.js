const { spawn } = require('child_process');
exports.default = async function afterbuild(context) {
  console.log('AFTER BUILD', context);
  const child = spawn('ls', ['-la'], { shell: true });
  
  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  
}
