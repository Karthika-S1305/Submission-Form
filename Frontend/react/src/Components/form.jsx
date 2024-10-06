import React, { useState } from 'react';
import './form.css';

function Form() {
  const [checked, setChecked] = useState({
    English: false,
    Tamil: false
  });

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactnumber: '',
    gender: '',
    language: [],
    uploadresume: '',
    url: '',
    about: ''
  });

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecked({
      ...checked,
      [name]: checked,
    });

    // Update the language in data based on checked values
    const newLanguages = checked
      ? [...data.language, name]
      : data.language.filter((lang) => lang !== name);

    setData({
      ...data,
      language: newLanguages,
    });
  };

  // Handle input changes for other fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('datakey', JSON.stringify(data));
    console.log('Form data saved:', data);
  };

  // Handle reset
  const handleReset = () => {
    setChecked({
      English: false,
      Tamil: false,
    });
    setData({
      firstname: '',
      lastname: '',
      email: '',
      contactnumber: '',
      gender: '',
      language: '',
      uploadresume: '',
      url: '',
      about: ''
    });
  };

  return (
    <div className='form'>
      <div className='form1'>Form in React</div>
      <div className='form-details'>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label>First Name</label>
            <input
              type='text'
              name='firstname'
              value={data.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>Last Name</label>
            <input
              type='text'
              name='lastname'
              value={data.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>Enter Email</label>
            <input
              type='email'
              name='email'
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>Contact Number</label>
            <input
              type='number'
              name='contactnumber'
              value={data.contactnumber}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>Gender</label>
            <select
              name='gender'
              value={data.gender}
              onChange={handleInputChange}
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
          <div className='form-input'>
            <label>Language</label>
            <div>
              <label>
                <input
                  type='checkbox'
                  name='Tamil'
                  checked={checked.Tamil}
                  onChange={handleCheckboxChange}
                />{' '}
                Tamil
              </label>
            </div>
            <div>
              <label>
                <input
                  type='checkbox'
                  name='English'
                  checked={checked.English}
                  onChange={handleCheckboxChange}
                />{' '}
                English
              </label>
            </div>
          </div>
          <div className='form-input'>
            <label>Upload Resume</label>
            <input
              type='file'
              name='uploadresume'
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>Enter URL</label>
            <input
              type='text'
              name='url'
              value={data.url}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-input'>
            <label>About</label>
            <textarea
              name='about'
              value={data.about}
              onChange={handleInputChange}
            />
          </div>
          <p>Submit or Reset</p>
          <div className='status-button'>
            <button type='button' onClick={handleReset}>
              Reset
            </button>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
