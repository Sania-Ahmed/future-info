
import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../fakedb";


const Detail = () => {
 const job = useLoaderData();
 const adToLocalStorage = (id,title) => {
    addToDb(id,title)
 }

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
              <p className="text-gray-500 mt-5 flex items-center gap-1" >
              <img className='w-4 h-4 rounded-md'src="https://img.freepik.com/free-icon/coin_318-130572.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=ais" alt="" />
                Salary: {job.salary}</p>
              <p className="text-gray-500 mt-5 flex gap-1 items-center">
              <img
              className="w-6 h-5 rounded-md" src="https://img.freepik.com/free-icon/tag_318-933325.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=sph"></img>
                Job Title : {job.jobTitle}</p>
              <h2 className="text-xl font-bold ">Contact Information </h2>
              <hr />
              <p className="text-gray-500 mt-5 flex gap-1 items-center"> <img
              className="w-4 h-4 rounded-md" src="https://img.freepik.com/free-icon/phone-with-wire_318-99650.jpg?size=626&ext=jpg&ga=GA1.2.632902743.1676570136&semt=sph"></img>
               Phone : {job.phone}</p>
              <p className="text-gray-500 mt-5 flex gap-1 items-center">
                <img className="w-5 h-6 rounded-md" src="https://img.freepik.com/free-icon/email_318-922369.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=sph"></img>
                Email: {job.email}</p>
              <p className="text-gray-500 mt-5 flex items-center gap-1">
              <img className='w-4 h-5 rounded' src="https://img.freepik.com/free-icon/pin-geolocalization_318-9542.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=ais" alt="" />
                Location: {job.location}</p>
              </div>
              <button className='py-2 w-full  px-1 bg-purple-600 text-white font-semibold rounded-md mt-5' onClick={() => adToLocalStorage(job.id,job.jobTitle)}>Apply now</button>

            </div>
        </div>
    );
};

export default Detail;