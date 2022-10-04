import React from 'react';

const Account = ({ formValues, onChange }) => {
  return (
    <div className='w-full max-w-sm'>
      <form className='bg-white shadow-md  px-8 pt-16 pb-10 mb-8 rounded-md'>
        <div className='flex flex-col gap-4 place-content-center items-center'>
          <h1 className='text-gray-700 pb-8 font-bold text-2xl'>Account</h1>
        </div>
        <div className='flex justify-between items-center mb-3'>
          <div className=''>
            <label
              className='block text-gray-700 text-sm font-bold'
              htmlFor='Name'
            >
              First Name
            </label>
            <input
              className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 '
              id='name'
              name='firstname'
              type='text'
              placeholder='Jane'
              onChange={onChange}
              value={formValues.name}
            ></input>
          </div>
          <div className='ml-4'>
            <label
              className=' text-gray-700 text-sm font-bold'
              htmlFor='LastName'
            >
              Last Name
            </label>
            <input
              className='shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='lastname'
              name='lastname'
              onChange={onChange}
              value={formValues.lastname}
              type='text'
              placeholder='Doe'
            ></input>
          </div>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username*
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            name='username'
            onChange={onChange}
            type='text'
            placeholder='Username'
          ></input>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Email Address*
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            name='email'
            onChange={onChange}
            type='text'
            placeholder='example@email.com'
          ></input>
        </div>
        <div className='flex justify-between items-center'>
          <div className='mb-6'>
            <label
              className=' block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password*
            </label>
            <input
              className='shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              name='password'
              value={formValues.password}
              onChange={onChange}
              type='password'
              placeholder='******************'
            ></input>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password*
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              value={formValues.confirmPassword}
              onChange={onChange}
              placeholder='******************'
            ></input>
          </div>
        </div>
        <div className='flex items-center justify-between'></div>
      </form>
    </div>
  );
};

export default Account;
