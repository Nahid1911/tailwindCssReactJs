import React, {useState} from 'react'

const MarginPadding = () => {
  const [marginValue, setMarginValue] = useState('');
  const [paddingValue, setPaddingValue] = useState('');

const handleMarginChange = (event) => {
  setMarginValue(event.target.value)
};

const handlePaddingChange = (event) => {
  setPaddingValue(event.target.value)
};
const handleReset = (event) => {
  setPaddingValue(event.target.value)
  setMarginValue(event.target.value)
};


  return (
    <>
      <div className='flex flex-col p-4 items-center'>
        <h1 className='align-middle text-3xl font-bold mb-2'>Margin and Padding in <span className='text-cyan-500'>TailwindCSS</span></h1>
        <h2 className='bg-slate-900 rounded-md p-1 text-green-500 align-middle mb-4 max-w-[480px] flex justify-center'>m = Margin, p = Padding, t = Top, b = Bottom, y = Top & Bottom, l = Left, r = Right, x = Left & Right</h2>

        <div>
          <div className='flex flex-row'>
            <p>Margin:</p>
            <select type='dropdown' value={marginValue} onChange={handleMarginChange} className='border rounded ml-4 mr-2'>
            <option value=''>Select Margin</option>
              <option value='m-6'>m-6</option>
              <option value='mt-6'>mt-6</option>
              <option value='mb-6'>mb-6</option>
              <option value='ml-6'>ml-6</option>
              <option value='mr-6'>mr-6</option>
              <option value='mx-6'>mx-6</option>
              <option value='my-6'>my-6</option>
            </select>
          </div>
          <div className='flex flex-row mt-4'>
            <p>padding:</p>
            <select placeholder="Enter like this: pt-8" value={paddingValue} onChange={handlePaddingChange} type='dropdown' className='border rounded mx-2'>
            <option value=''>Select Padding</option>
              <option value='p-6'>p-6</option>
              <option value='pt-6'>pt-6</option>
              <option value='pb-6'>pb-6</option>
              <option value='pl-6'>pl-6</option>
              <option value='pr-6'>pr-6</option>
              <option value='px-6'>px-6</option>
              <option value='py-6'>py-6</option>
            </select>
          </div>
        </div>
        <button value='' onClick={handleReset} className='bg-sky-500 rounded-md px-4 py-1 mt-2 text-white hover:bg-sky-700'>Reset</button>
        <h2 className='mt-4'>Observe The change here</h2>
        <p>Margin: <span className='text-green-500 font-bold'>Change Outside Red Box</span></p>
        <p>Padding: <span className='text-red-500 font-bold'>Change Inside Red Box</span></p>
        <div className='flex flex-col border items-center align-middle bg-green-800 p-6'>
          <div className={`flex flex-col border items-center justify-items-center border-green-600 bg-red-700 ${marginValue} ${paddingValue}`}>
            <div className='flex flex-col border p-4 m-4 items-center border-rose-600 bg-slate-300'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarginPadding