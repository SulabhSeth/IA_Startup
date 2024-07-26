'use client';

import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [documents, setDocuments] = useState([]);
  const [form, setForm] = useState({startup_Name: '', owner_first_name: '', owner_last_name: '', category: '', city: '',  state: '', zip: '', logInId: '', password: '',  email: ''  });
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  // useEffect(() => {
  //   const fetchDocuments = async () => {
  //     try {
  //       const response = await fetch('/api/fetchData');
  //       if (!response.ok) {
  //         console.error('Failed to fetch the data:', response.statusText);
  //         setMessage(`Error: ${response.statusText}`);
  //         return;
  //       }
  //       const data = await response.json();
  //       setDocuments(data);
  //     } catch (error) {
  //       console.error('Failed to fetch the data:', error);
  //       setMessage(`Error: ${error.message}`);
  //     }
  //   };

  //   fetchDocuments();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form is", form);  // Improved logging
    console.log("helo"); 
    try {
      console.log("form is", form);  // Improved logging
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
      console.log("data is is", data);  // Improved logging
  
      if (data.success) {
        setMessage('User created successfully');
        setForm({ 
          startup_Name: '', 
          owner_first_name: '', 
          owner_last_name: '', 
          category: '', 
          city: '',  
          state: '', 
          zip: '', 
          logInId: '', 
          password: '',    
        });
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  

  return (
    <div className="flex ml-96">
    <div>
     
    </div>
    <div className="mt-12 ml-36 ">
      <form class="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              id="startup_Name"
              name="startup_Name"
              for="grid-first-name"
            >
              Startup Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="startup_Name"
              name="startup_Name"
              value = {form.startup_Name}
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </div>

          <div class="w-full md:w-full mt-4 flex px-3">
            <div className="w-1/2">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Owner's First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="owner_first_name"
                name="owner_first_name"
                value = {form.owner_first_name}
                onChange={handleChange}
                type="text"
                placeholder="Doe"
              />
            </div>
            <div className="w-1/2">
              <label
                class="block uppercase tracking-wide ml-4 text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Owner's Last Name
              </label>
              <input
                class="appearance-none block w-full ml-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="owner_last_name"
                name="owner_last_name"
                value = {form.owner_last_name}
                onChange={handleChange}
                type="text"
                placeholder="Smith"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Category
          </label>
          <div class="relative ">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              name="category"
              value = {form.category}
                onChange={handleChange}
            >
              <option>Artificial Intelligence</option>
              <option>Robotics</option>
              <option>Environment</option>
              <option>Education</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
        <div class="flex flex-wrap-mx-3 mb-2 mt-4 ">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              name="city"
              type="text"
              value = {form.city}
                onChange={handleChange}
              placeholder="Albuquerque"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              State
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                name="state"
                value = {form.state}
                onChange={handleChange}
              >
                <option>New Delhi</option>
                <option>Gurugram</option>
                <option>Noida</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="zip"
              name="zip"
              type="text"
              value = {form.zip}
                onChange={handleChange}
              placeholder="90210"
            />
          </div>
        </div>
        <div class="w-full md:w-full flex px-3 mt-8">
          <div className="w-1/2">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              LogIn-ID
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="logInId"
              name="logInId"
              type="text"
              value = {form.logInId}
                onChange={handleChange}
              placeholder="LogIn ID"
            />
          </div>
          <div className="w-1/2">
            <label
              class="block uppercase tracking-wide ml-4 text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full ml-1 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              name="password"
              value = {form.password}
                onChange={handleChange}
              type="text"
              placeholder="********"
            />
          </div>
        </div>
        <div className="mt-8 ">
          
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full ml-56">
          Submit
        </button>
      </form>
    </div>
    <div>
     
    </div>
  </div>
  );
};

export default YourComponent;
