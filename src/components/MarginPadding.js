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


  return (
    <>
      <div className='flex flex-col p-4 items-center'>
        <h1 className='align-middle text-3xl font-semibold mb-4'>Margin and Padding in TailwindCSS</h1>
        <div>
          <div className='flex flex-row'>
            <p>Margin:</p>
            <select value={marginValue} onChange={handleMarginChange} type='dropdown' className='border border-blue-300 ml-4'>
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
            <select value={paddingValue} onChange={handlePaddingChange} type='dropdown' className='border border-blue-300 ml-2'>
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
        <h2 className='mt-12'>See The output here</h2>
        <div className='flex flex-col border items-center align-middle border-rose-600 bg-green-800 h-64 w-64'>
          <div className={`flex flex-col border items-center justify-items-center border-green-600 bg-red-700 ${marginValue} ${paddingValue}`}>
            <div className='flex flex-col border p-4 m-4 items-center border-rose-600 bg-slate-300'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarginPadding