function InputField({ fieldName, variable, setVariable, type }) {
  return (
    <div className="group relative z-0  w-4/5 bg-white lg:w-full">
      <input
        type=""
        name="floating_email"
        id="floating_email"
        className={`${variable ? ' pt-5 ' : 'mt-0 '}  peer block w-full  appearance-none rounded-[0.3rem] border-[0.7px]  border-gray-400 bg-transparent  py-2 pl-5 text-base text-gray-900 focus:pt-5  focus:outline-none  peer-focus:top-7`}
        placeholder=" "
        value={variable}
        onChange={(e) => setVariable(e.target.value)}
        required
      />
      <label
        htmlFor="floating_email"
        className={`absolute top-3 pl-2 text-sm text-gray-500 duration-300 peer-focus:top-[0.02rem] peer-focus:scale-75 ${variable && 'top-[-0.0120px] scale-75 '}`}
      >
        {fieldName}
      </label>
    </div>
  )
}

export default InputField
