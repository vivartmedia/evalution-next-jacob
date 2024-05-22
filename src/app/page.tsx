
'use client'
import { useEffect, useState } from "react";

export default function Home() {
  
  // useState is used to store and set the form state, initially empty for 'name' and 'favoriteFood'.
  const [form, setForm] = useState({ name: '', favoriteFood: '' });

  // Derived state to check if both input fields are filled.
  const isFilled = form.name != '' && form.favoriteFood != '';

  // State to track if the form has been submitted.
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to update form state based on input changes.
  // This function is triggered on every keystroke in either input field.
  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Updates the form state dynamically based on input name and value.
    // Spread operator (...) is used to copy existing form state to ensure we only update the changed part.
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Function to handle form submission.
  const handleForm = () => {
    // Conditional logic to check if all fields are filled.
    // If fields are filled, set isSubmitted to true, else reset form fields to empty.
    isFilled ? setIsSubmitted(true) : setForm({ name: '', favoriteFood: '' });
  }

  // useEffect hook to perform side effects.
  // Here, it's used to log the form state to console whenever form state changes.
  // This could be useful for debugging or tracking form state changes over time.
  useEffect(() => {
    console.log(form);
  }, [form]);  // Dependency array with 'form' means this effect runs every time 'form' changes.

  // JSX returns the UI structure for the component.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
      <form className={isSubmitted ? 'hidden' : ''}>
        <h1 className="text-center text-lg">Favorite Food Form</h1>
        <div className="bg-white shadow-md rounded p-8">
          <div className="mb-4">
            <label className="block rounded p-3">
              Name
            </label>
            <input type="text" className="border rounded p-3" placeholder="Name" name="name" onChange={updateForm} value={form.name} />
          </div>
          <div className="mb-4">
            <label className="block rounded p-3">
              Favorite Food
            </label>
            <input type="text" className="border rounded p-3" placeholder="Favorite Food" name="favoriteFood" onChange={updateForm} value={form.favoriteFood}  />
          </div>
          <button 
            className={`text-white py-2 px-4 rounded ${isFilled ? 'bg-green-500 hover:bg-green -700' : 'bg-red-500 hover:bg-red-700'}`} 
            type="button" 
            onClick={handleForm} >
            {isFilled ? 'Submit' : 'Clear'}
          </button>
        </div>
      </form>
      <p className={isSubmitted ? '' : 'hidden'}>Thank you for your submission!</p>
    </main>
  );
}
