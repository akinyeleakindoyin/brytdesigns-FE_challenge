import React, { useState } from 'react';
import Account from './components/Account';
import Address from './components/Address';
import Preferences from './components/Preferences';

const MainComponent = () => {
  const formList = ['Account', 'Address', 'Preferences'];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    name: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    username: '',
    city: '',
    country: '0',
    address: '',
    zip: '',
    terms: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <Account formValues={values} onChange={onChange}></Account>
          </div>
        );
      }
      case 1: {
        return (
          <Address
            formValues={values}
            onChange={onChange}
            option={countries}
          ></Address>
        );
      }
      case 2: {
        return (
          <Preferences
            formValues={values}
            onChange={onChange}
            option2={notifPreference}
          ></Preferences>
        );
      }
      default:
        return null;
    }
  };

  const countries = [
    { id: '0', name: 'Dropdown' },
    { id: '1', name: 'United States' },
    { id: '2', name: 'Nigeria' },
    { id: '3', name: 'Austria' },
  ];

  const notifPreference = [
    { id: '0', name: 'Dropdown: Email or Text' },
    { id: '1', name: 'Email' },
    { id: '2', name: 'Text' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log('form', values);
    }, 2000);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case 'Account': {
        return setPage(0);
      }
      case 'Address': {
        return setPage(1);
      }
      case 'Preferences': {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className='grid gap-4 place-content-center items-center h-screen place-items-center '>
      <ul className='flex justify-between w-full'>
        <li
          onClick={setForm}
          className={
            page === 0 ? 'bg-blue-300 w-2/6 rounded-lg  ' : 'bg: transparent'
          }
        >
          <div className='flex justify-center items-center '>
            <h1
              className={
                page === 0
                  ? 'ml-2 text-white font-medium'
                  : 'ml-2 text-blue-300 cursor-pointer'
              }
            >
              Account
            </h1>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 1 ? 'bg-blue-300  w-2/6 rounded-lg' : 'bg: transparent '
          }
        >
          <div className='flex items-center'>
            <h1
              className={
                page === 1
                  ? 'ml-2 text-white font-medium'
                  : 'ml-2 text-blue-300 cursor-pointer'
              }
            >
              Address
            </h1>
          </div>
        </li>
        <li
          onClick={setForm}
          className={
            page === 2 ? 'bg-blue-300 w-2/6 rounded-lg' : 'bg: transparent'
          }
        >
          <div className='flex items-center'>
            <span
              className={
                page === 2
                  ? 'ml-2 text-white font-medium'
                  : 'ml-2 text-blue-300 cursor-pointer'
              }
            >
              Preferences
            </span>
          </div>
        </li>
      </ul>
      <div className='flex-1'>{handleForms()}</div>
      <div
        className={
          page === 0
            ? 'flex items-center justify-center'
            : 'grid grid-cols-2 gap-4 place-content-center items-center'
        }
      >
        <button
          onClick={handlePrev}
          className={
            page === 0
              ? 'hidden'
              : 'bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 '
          }
          // disabled={page === 0}
        >
          &larr; Back
        </button>
        {page === 2 ? (
          <button
            onClick={handleSubmit}
            className='bg-blue-200 hover:bg-red-300 rounded-md text-gray-800 font-bold py-2 px-4 '
          >
            Register!
          </button>
        ) : (
          <button
            onClick={handleNext}
            className='bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 '
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
