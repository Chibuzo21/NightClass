export default function Props({ image, title, text }) {
  // props is a means of passing data from the parent component to the child component
  return (
    <div className='mx-auto max-w-[20%] py-20'>
      <div className='bg-purple-900 rounded-md py-16 px-6 text-xl text-white space-y-6'>
        <img src={image} alt='' width={60} />
        <h2 className='font-semibold '>{title}</h2>
        <p className=' text-gray-300 text-base'>{text}</p>
      </div>
    </div>
  );
}
