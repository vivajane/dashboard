import React from 'react'

const Review = () => {
  return (
       <div className=" py-6 grid md:grid-cols-4 gap-4 ">
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
  )
}

export default Review
