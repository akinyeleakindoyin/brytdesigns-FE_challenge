import React from 'react';

const Preferences = ({ onChange, formValues, option2 }) => {
  return (
    <div className='w-full max-w-sm'>
      <form className='bg-white shadow-md rounded px-8 pt-16 pb-10 mb-8 rounded-md '>
        <div className='grid gap-4 place-content-center items-center'>
          <h1 className='text-gray-700 pb-8 font-bold text-2xl'>Preferences</h1>
        </div>

        <div className='flex justify-start items-center'>
          <input
            name='terms'
            value={formValues.terms}
            onChange={onChange}
            className='shadow cursor-pointer border rounded'
            type='checkbox'
          ></input>
          <label
            className='block text-gray-700 px-2  text-sm font-bold mb-2'
            htmlFor='Terms'
          >
            Send notification
          </label>
        </div>
        <div className='flex justify-start items-center mb-6'>
          <input
            name='information'
            value={formValues.information}
            onChange={onChange}
            className='shadow cursor-pointer border rounded'
            type='checkbox'
          ></input>
          <label
            className='block text-gray-700 px-2  text-sm font-bold mb-2'
            htmlFor='Terms'
          >
            {' '}
            Share information with related marketer
          </label>
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='State'
          >
            Notification Preferences
          </label>
          <select
            className='block shadow w-full appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='city'
            name='city'
            onChange={onChange}
            value={formValues.city}
          >
            {option2.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className='flex items-center justify-between'></div>
      </form>
    </div>
  );
};

export default Preferences;
