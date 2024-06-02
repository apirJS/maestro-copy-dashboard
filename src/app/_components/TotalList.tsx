import { dummyTotalList } from "@/dummyData";

export default function TotalList() {
  const totals = dummyTotalList;

  return (
    <>
      {totals.map((totalItem, index) => (
        <div key={index} className='bg-primary flex flex-col p-3 gap-y-3 justify-center rounded-md'>
          <span className='lg:text-lg'>{totalItem.title}</span>
          <span className='lg:text-xl font-semibold'>Rp {totalItem.amount ?? 0}</span>
        </div>
      ))}
    </>
  );
}
