
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();
  let delay = ((d)=>{
    return new Promise((resolve,reject)=>{
      
      setTimeout(()=>{resolve()},d*3000);
    })})
    const onSubmit = async(data) => {
      await delay(4);
      console.log(data);}

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input 
      {...register("username", {
        minLength: {value:3,message:"min 3 letter"},
        maxLength: {value:8,message:"max 8 letter"},
        required: {value:true,message
        :"this field is required"},
        })} type="text"/>
      <div className="red">{errors.username ? errors.username.message : "hi"}</div>

      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { 
        required:{value:true,message:"this field is required"},
        minLength:{value:8,message:"Password should be atleast 8 character long"} })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>{errors.password.message}</span>}
      
      <input type="submit" disabled={isSubmitting}/>
    </form>
    </>
  )
}

export default App
