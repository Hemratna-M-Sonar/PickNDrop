import React from 'react';

const RideOrDrive = ({title, type1, type2, ph1, ph2, btn1, btn2}) => {
  return (
    <>
        <div className="p-[3rem]">
          <h1 className="text-5xl font-semibold mt-3 titleText">{title}</h1>
          <form action="" className="mt-10">
          <input type={type1} className="block w-full p-3" placeholder={ph1}/>
          <input type={type2} className="block w-full p-3 mt-4" placeholder={ph2}/>

            <input className="px-7 py-4 mt-7 bg-black text-white rounded-xl hover:bg-slate-900 transition ease-in-out cursor-pointer" type="submit" value={btn1} />
            <input className="px-7 py-4 mt-7 bg-slate-200 ml-5 rounded-xl hover:bg-slate-300 transition ease-in-out cursor-pointer" type="submit" value={btn2} />
          </form>
        </div>
    </>
  )
}

export default RideOrDrive;