import SearchBar from "../../components/SearchBar";

export default function Transaksi() {
  return (
    <main className='grid place-content-center w-full h-full'>
      <div className='min-w-[80vw] min-h-[80vh] flex-col flex gap-y-4'>
        <SearchBar />
        <div className="bg-table w-full h-full">

        </div>
      </div>
    </main>
  );
}
