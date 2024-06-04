interface Props {
  dateRange: "week" | "month" | "year";
}

export default function DateRangeBarChart({ dateRange }: Props) {
  return (
    <div className="absolute rounded-md font-bold text-white lg:text-xs min-w-20 border-neutral-800 border-2 min-h-6 flex justify-evenly bg-main top-3 right-3">
      <button className=" w-full rounded-md">W</button>
      <button className="bg-accent w-full rounded-md">M</button>
      <button className=" w-full rounded-md">Y</button>
    </div>
  )
}