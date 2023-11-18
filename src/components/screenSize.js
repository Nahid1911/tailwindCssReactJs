function ScreenSize () {
  return (
    <div>
    <h1 className='italic mt-8 text-red-500 font-extrabold text-2xl text-center'>TailwindCSS Screen Size Visualization</h1>
    <p className="text-center">This is a simple example of how to use Tailwind CSS's screen size classes</p>
    <p className="text-center">Resize your browser window to see the effect</p>
    <p className="text-center">The background color changes at the following breakpoints:<span className="font-bold text-lg text-red-400"> sm, md, lg, xl, 2xl</span></p>
    <div className=" flex m-4 h-[300px] font-bold justify-between text-white bg-yellow-600 sm:bg-red-900 md:bg-green-900 lg:bg-blue-800 xl:bg-violet-500 2xl:bg-orange-700">
      <div className="flex w-auto h-auto p-1 m-4 items-center text-2xl bg-red-900 sm:max-md:text-green-500 sm:max-md:border">sm: 640px <br/> (min-width)</div>
      <div className="flex w-auto h-auto p-1 m-4 items-center text-2xl bg-green-900 md:max-lg:text-green-500 md:max-lg:border">md: 768px <br/> (min-width)</div>
      <div className="flex w-auto h-auto p-1 m-4 items-center text-2xl bg-blue-800 lg:max-xl:text-green-500 lg:max-xl:border">lg: 1024px <br/> (min-width)</div>
      <div className="flex w-auto h-auto p-1 m-4 items-center text-2xl bg-violet-500 xl:max-2xl:text-green-500 xl:max-2xl:border">xl: 1280px <br/> (min-width)</div>
      <div className="flex w-auto h-auto p-1 m-4 items-center text-2xl bg-orange-700 2xl:text-green-500 2xl:border">2xl: 1536px <br/> (min-width)</div>
    </div>
    </div>
  );
}
export default ScreenSize