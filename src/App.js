import './App.css';

function App() {
  return (
  
<div class="relative flex min-h-screen flex-col justify-center items-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
  <img src="/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative flex  justify-center items-center flex-col rounded-xl bg-white p-4   shadow-xl ring-1 ring-gray-900/5 w-72 ">
    <div class="flex justify-center items-center w-full  bg-blue-500 h-64 rounded-xl "><img className='rounded-xl' src="/image-qr-code.png" alt="" /></div>
    <div class="flex justify-center items-center w-full flex-col gap-5 p-4   rounded-xl  h-4/6 "><h1 class="text-base text-center  antialiased font-bold tracking-wider ">Improve your front-end skills my building projects</h1>
    <h4 class="text-sm text-center  antialiased font-mono font-medium opacity-40 ">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h4>
    
    </div>
  </div>
  <div class="absolute bottom-10"> <h1 class="font-mono from-neutral-300 text-center">Challenge by <a href="https://www.frontendmentor.io" class="font-bold font-mono text-lg align-middle  text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 ">Frontend Mentor</a> Coded by <a href="https://imharsh.framer.website/"  class="font-bold font-mono text-lg align-middle  text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 " >Harsh Choudhary </a></h1 ></div>
</div>

  );
}

export default App;
