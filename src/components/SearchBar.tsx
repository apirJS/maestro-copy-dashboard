import { IoMdSearch } from 'react-icons/io';

export default function SearchBar() {
  return (
    <>
      <div className='grid bg-table grid-cols-[1fr,8fr] max-w-[15vw] lg:text-lg gap-x-1'>
        <IoMdSearch size={30} />  
        <input type='text' className='w-full outline-none bg-transparent justify-self-start placeholder:italic' placeholder='cari...' />
      </div>
    </>
  );
}
