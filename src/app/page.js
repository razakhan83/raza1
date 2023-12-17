import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
//     <main className=" flex justify-space-between  ">
//     <h1 className='text-3xl font-bold	'>Raza</h1>
// <Link href="./login" > Login </Link>

//     </main>
// return (

//     <div className="bg-stone-50 pr-20 max-md:pr-5">
//       <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//         <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
//           <div className="bg-white flex grow flex-col w-full pl-10 pr-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
//             <div className="text-black text-4xl font-semibold self-center whitespace-nowrap mt-12 max-md:mt-10">
//               Logo
//             </div>
//             <div className="flex items-stretch justify-between gap-5 mt-20 self-start max-md:mt-10">
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-square object-contain object-center w-[66px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="text-neutral-500 text-4xl font-medium my-auto">
//                 Students
//               </div>
//             </div>
//             <div className="flex items-stretch justify-between gap-5 mt-12 self-start max-md:mt-10">
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-square object-contain object-center w-[66px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="text-stone-900 text-4xl font-medium self-center grow whitespace-nowrap my-auto">
//                 Attendance
//               </div>
//             </div>
//             <div className="text-stone-900 text-4xl font-medium whitespace-nowrap ml-5 mt-[806px] mb-7 self-start max-md:ml-2.5 max-md:mt-10">
//               Logout
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
//           <div className="flex flex-col mt-16 max-md:max-w-full max-md:mt-10">
//             <div className="flex items-stretch justify-between gap-5 self-start">
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-square object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
//               />
//               <div className="text-neutral-800 text-5xl font-semibold self-center grow whitespace-nowrap my-auto">
//                 Attendance
//               </div>
//             </div>
//             <div className="shadow-lg bg-blue-400 self-stretch flex items-center justify-between gap-5 mt-12 pl-11 pr-20 py-6 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
//               <div className="text-white text-lg font-semibold whitespace-nowrap self-start">
//                 id
//               </div>
//               <div className="text-white text-lg font-semibold my-auto">
//                 Profile Img
//               </div>
//               <div className="text-white text-lg font-semibold my-auto">
//                 Name
//               </div>
//               <div className="text-white text-lg font-semibold mt-3">
//                 Checked In Time
//               </div>
//               <div className="text-white text-lg font-semibold grow whitespace-nowrap mt-3 self-start">
//                 Checked Out Time
//               </div>
//             </div>
//             <div className="bg-white self-stretch flex items-start justify-between gap-5 mt-11 pl-11 pr-20 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
//               <div className="text-neutral-800 text-lg font-medium self-center whitespace-nowrap my-auto">
//                 1
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-[1.05] object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
//               />
//               <div className="text-neutral-800 text-lg font-medium self-center my-auto">
//                 Abdullah
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight my-auto">
//                 09:00 AM 12-11-2023
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight self-center grow whitespace-nowrap my-auto">
//                 05:00 PM 12-11-2023
//               </div>
//             </div>
//             <div className="bg-white self-stretch flex items-start justify-between gap-5 mt-6 pl-11 pr-20 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:px-5">
//               <div className="text-neutral-800 text-lg font-medium self-center whitespace-nowrap my-auto">
//                 1
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-[1.05] object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
//               />
//               <div className="text-neutral-800 text-lg font-medium self-center my-auto">
//                 Abdullah
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight my-auto">
//                 09:00 AM 12-11-2023
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight self-center grow whitespace-nowrap my-auto">
//                 05:00 PM 12-11-2023
//               </div>
//             </div>
//             <div className="bg-white self-stretch flex items-start justify-between gap-5 mt-6 pl-11 pr-20 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:px-5">
//               <div className="text-neutral-800 text-lg font-medium self-center whitespace-nowrap my-auto">
//                 1
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-[1.05] object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
//               />
//               <div className="text-neutral-800 text-lg font-medium self-center my-auto">
//                 Abdullah
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight my-auto">
//                 09:00 AM 12-11-2023
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight self-center grow whitespace-nowrap my-auto">
//                 05:00 PM 12-11-2023
//               </div>
//             </div>
//             <div className="bg-white self-stretch flex items-start justify-between gap-5 mt-6 pl-11 pr-20 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:px-5">
//               <div className="text-neutral-800 text-lg font-medium self-center whitespace-nowrap my-auto">
//                 1
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-[1.05] object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
//               />
//               <div className="text-neutral-800 text-lg font-medium self-center my-auto">
//                 Abdullah
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight my-auto">
//                 09:00 AM 12-11-2023
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight self-center grow whitespace-nowrap my-auto">
//                 05:00 PM 12-11-2023
//               </div>
//             </div>
//             <div className="bg-white self-stretch flex items-start justify-between gap-5 mt-6 pl-11 pr-20 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:px-5">
//               <div className="text-neutral-800 text-lg font-medium self-center whitespace-nowrap my-auto">
//                 1
//               </div>
//               <img
//                 loading="lazy"
//                 srcSet="..."
//                 className="aspect-[1.05] object-contain object-center w-[42px] overflow-hidden self-stretch shrink-0 max-w-full"
//               />
//               <div className="text-neutral-800 text-lg font-medium self-center my-auto">
//                 Abdullah
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight my-auto">
//                 09:00 AM 12-11-2023
//               </div>
//               <div className="text-neutral-800 text-lg font-medium tracking-tight self-center grow whitespace-nowrap my-auto">
//                 05:00 PM 12-11-2023
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import * as React from "react";

// function MyComponent(props) {
//   return (
    <div className="bg-white flex max-w-[480px] w-full flex-col items-stretch mx-auto px-5 py-12">
      <div className="flex justify-between gap-5 px-px items-start">
        <div className="text-black text-4xl font-semibold mt-2">
          Hello Bilal
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.06] object-contain object-center w-[53px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
      <div className="bg-emerald-100 flex flex-col items-stretch mt-7 pl-3 pr-12 py-5 rounded-md">
        <div className="text-black text-xl font-semibold">Congratulations</div>
        <div className="text-black text-base font-medium whitespace-nowrap mt-2.5">
          Your attendation is marked for today.
        </div>
      </div>
      <div className="text-neutral-500 text-xl font-medium mt-10">Id</div>
      <div className="text-black text-xl font-semibold mt-6">02113112312</div>
      <div className="text-neutral-500 text-xl font-medium mt-9">Course</div>
      <div className="text-black text-xl font-semibold mt-6">
        Web and App Development
      </div>
      <div className="text-neutral-500 text-xl font-medium mt-7">
        Checked In Time
      </div>
      <div className="text-black text-xl font-semibold mt-6">
        16-12-2023 09:00 AM
      </div>
      <div className="text-neutral-500 text-xl font-medium mt-8">
        Checked In Time
      </div>
      <div className="text-black text-xl font-semibold mt-6 mb-44">
        16-12-2023 11:00 AM
      </div>
    </div>
  );
}






  

// import * as React from "react";

// function MyComponent(props) {
 