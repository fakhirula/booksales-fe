import { useEffect, useState } from "react";
import { getAuthors } from "../../../services/authors";

export default function Authors() {
  const [authors, setAuthors] = useState([]);  
    
    useEffect(() => {  
      const fetchAuthors = async () => {  
        const data = await getAuthors();  
        setAuthors(data);  
      };  
    
      fetchAuthors();  
    }, []);
  
  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                Name
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Photo
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Bio
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            {authors.length > 0 ?
            authors.map((author) => (
            <tr key={author.id} className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <p className="text-black dark:text-white">{author.name}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{author.photo}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{author.bio}</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <a href=""><i className="fa-solid fa-pen-to-square"></i></a>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            )) : (
              <p>Data tidak ditemukan</p>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}