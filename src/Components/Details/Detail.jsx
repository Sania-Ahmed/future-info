
import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";


const Detail = () => {
 const job = useLoaderData();
 

    return (
        <div className="flex items-center justify-between gap-3 mt-16 ">
             <div className="p-5 flex flex-col w-3/4">
              <p className="text-gray-500 mt-5" > <span className="font-bold text-lg text-black px-3">Job desicription:</span>
              {job.jobDescription}</p>
              <p className="text-gray-500 mt-5" > <span className="font-bold text-lg text-black px-3">Job Responsibilities:</span>
              {job.responsibilities}</p>
              <p className="text-gray-500 mt-5" > <span className="font-bold text-lg text-black px-3">Educational requirements :</span> <br />
              {job.educationalRequirements}</p>
              <p className="text-gray-500 mt-5" > <span className="font-bold text-lg text-black px-3">Experiences :</span> <br />
              {job.experience}</p>
             </div>
            
            <div className="w-1/4">
              <div className="bg-purple-100 py-4 px-4 rounded-md">
              <h2 className="text-xl font-bold ">Job details </h2>
              <hr/>
              <p className="text-gray-500 mt-5" >Salary: {job.salary}</p>
              <p className="text-gray-500 mt-5">Job Title : {job.jobTitle}</p>
              <h2 className="text-xl font-bold ">Contact Information </h2>
              <hr />
              <p className="text-gray-500 mt-5">Phone : {job.phone}</p>
              <p className="text-gray-500 mt-5">Email: {job.email}</p>
              <p className="text-gray-500 mt-5">Location: {job.location}</p>
              </div>
              <button className='py-2 w-full  px-1 bg-purple-600 text-white font-semibold rounded-md mt-5'>Apply now</button>

            </div>
        </div>
    );
};

export default Detail;