
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [blurPixels, setBlurPixels] = useState(12);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <main style={{ backdropFilter: `blur(${blurPixels}px)` }}>
      <div className="container">
        <h2>React Hook Form</h2>
        <h5>Change the password to see the effect in the background</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Full Name" {...register("fullname", { required: "This field is required" })} />
          {errors.fullname && <p className='errors'>{errors.fullname.message}</p>}
          <input type="email" placeholder="Email" {...register("email", { required: "This field is required", pattern: { value: /^\S+@\S+$/i, message: 'This field requires a valid email' } })} />
          {errors.email && <p className='errors'>{errors.email.message}</p>}
          <input id="password" type="password" placeholder="Password" onInput={(e) =>
            setBlurPixels(12 - e.target.value.length)} {...register("password", { required: "This field is required", min: 8, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, message: 'The password must include: at least one lowercase letter, one uppercase letter, and one number.' } })} />
          {errors.password && <p className='errors'>{errors.password.message}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
export default App

