import React from 'react';

const Address = ({ formValues, onChange, option }) => {
  return (
    <div className='w-full max-w-sm'>
      <form className='bg-white shadow-md  px-8 pt-16 pb-10 mb-8 rounded-md'>
        <div className='grid gap-4 place-content-center items-center'>
          <h1 className='text-gray-700 pb-8 font-bold text-2xl'>Address</h1>
        </div>
        <div className='flex justify-between items-center mb-3'>
          <div className=''>
            <label
              className='block text-gray-700 text-sm font-bold'
              htmlFor='Name'
            >
              Address*
            </label>
            <input
              className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 '
              id='name'
              name='address'
              type='text'
              placeholder='1234, E 26th street'
              onChange={onChange}
              value={formValues.address}
            ></input>
          </div>
          <div className='ml-4'>
            <label
              className=' text-gray-700 text-sm font-bold'
              htmlFor='LastName'
            >
              Apartment, Suite, etc
            </label>
            <input
              className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='apartment_number'
              name='apartment_number'
              onChange={onChange}
              value={formValues.lastname}
              type='text'
              placeholder='20011'
            ></input>
          </div>
        </div>

        <div className='flex justify-between items-center gap-2'>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='State'
            >
              Country*
            </label>
            <select
              className='block shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='country'
              name='country'
              onChange={onChange}
              value={formValues.country}
            >
              {option.map((country) => {
                return (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                );
              })}
            </select>
          </div>{' '}
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='Zip'
            >
              City*
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='zip'
              type='text'
              name='city'
              value={formValues.city}
              onChange={onChange}
              placeholder='City'
            ></input>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='Zip'
            >
              Zipcode
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='zip'
              type='text'
              name='zip'
              value={formValues.zip}
              onChange={onChange}
              placeholder='00000'
            ></input>
          </div>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='Address'
          >
            Company
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='address'
            name='company'
            type='text'
            placeholder='Bryt Designs'
            value={formValues.company}
            onChange={onChange}
          ></input>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='Address'
          >
            Phone Number
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='phonenumber'
            name='phonenumber'
            type='text'
            placeholder='123-456-7890'
            value={formValues.phoneNumber}
            onChange={onChange}
          ></input>
        </div>
        <div className='flex items-center justify-between'></div>
      </form>
    </div>
  );
};

export default Address;
