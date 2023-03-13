const { spawn } = require('child_process');

//const streamPath = 'allegacy';
//const mp4Path = '/Users/chang/nodejs/socket/asset/allegacy.mp4'
console.log("start script");
const args = process.argv.slice(2);

// Parse the parameters into an object
const params = {};
for (let i = 0; i < args.length; i += 2) {
  const key = args[i].replace(/^--/, '');
  const value = args[i + 1];
  params[key] = value;
}

//console.log('Parameters:', params);

const ffmpegCommand = `ffmpeg -re -i ${params.path+params.name}  -c:v h264 -bsf:v h264_mp4toannexb  -c:a aac -f flv rtmp://host.docker.internal/stage/${params.channel}`;
// const ffmpegCommand = `-re -i ${params.path+params.name}  -c copy -f flv rtmp://localhost/stage/8`;


console.log(ffmpegCommand);
const ffmpegProcess = spawn('sh', ['-c', ffmpegCommand]);
// const ffmpegProcess = spawn('docker', ['exec','linux_ffmpeg', ffmpegCommand]);
//const ffmpegProcess = spawn('docker', ['run','--rm -it -v /video:/video linuxserver/ffmpeg', ffmpegCommand]);

ffmpegProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});