const { spawn } = require('child_process');

const streamPath = 'allegacy';
const mp4Path = '/Users/chang/nodejs/socket/asset/allegacy.mp4'
const ffmpegCommand = `ffmpeg -re -i ${mp4Path} -c:v libx264 -c:a aac -f flv rtmp://localhost/${streamPath}`;

const ffmpegProcess = spawn('sh', ['-c', ffmpegCommand]);

ffmpegProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
