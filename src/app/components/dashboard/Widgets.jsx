const widgets = [
  {
    id: 1,
    img: "/images/groupf.png",
    num: 75,
    title: "Total Orders",
    percentage: 4,
  },

  {
    id: 2,
    img: "/images/groupo.png",
    num: 357,
    title: "Total Delivered",
    percentage: 4,
  },
  {
    id: 3,
    img: "/images/groupt.png",
    num: 35,
    title: "Total Cancelled",
    percentage: 25,
  },
  {
    id: 4,
    img: "/images/groupf.png",
    num: 75,
    title: "Total Revenue",
    percentage: 12,
  },
];

export default function Widget() {
  return (
    <div className=" py-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
      {widgets.map((widget) => (
        <div key={widget.id} className="bg-white flex items-center gap-4 p-4 rounded-xl shadow hover:shadow-md transition">
          <div className="bg-[#00B07426] p-2 rounded-full h-20 w-20">
            <img className="w-full " src={widget.img} alt={widget.title} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#464255]">${widget.num}</h1>
            <h1 className="text-[#464255]">{widget.title}</h1>
            <h1 className="text-[#A3A3A3] text-sm">{widget.percentage}%(30 days)</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
