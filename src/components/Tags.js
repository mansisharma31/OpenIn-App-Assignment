import React, { useState } from 'react';
import './Tags.css';

export default function UploadsTable() {
  //Define the data for the table
  const initialData = [
    { serial: 1, link: 'http://timesonline.co.uk', data: 'QB0GaK7', selectedOption: '' },
    { serial: 2, link: 'http://merriam-webster.com', data: '8oUTDyz', selectedOption: '' },
    { serial: 3, link: 'http://newyorker.com', data: 'Z9i2o9o', selectedOption: '' },
    { serial: 4, link: 'http://angelfire.com', data: 'pW44f49', selectedOption: '' },
    { serial: 5, link: 'http://rambler.ru', data: 'w1vDJvP', selectedOption: '' },
  ];

  const [tableData, setTableData] = useState(initialData);

  const options = [
    'Technology',
    'Fashion',
    'Food',
    'Travel',
    'Sports',
    'Music',
    'Art',
    'Health',
    'Education',
    'Finance',
  ];

  const handleSelectChange = (e, index) => {
    const newTableData = [...tableData];
    newTableData[index].selectedOption = e.target.value;
    setTableData(newTableData);
  };

//   const handleDeselect = (index) => {
//     const newTableData = [...tableData];
//     newTableData[index].selectedOption = ''; // Clear the selected option
//     setTableData(newTableData);
//   };

  return (
    <div className="p-4 bg-thirdBg flex justify-center items-center">
      <div className=" shadow-md rounded-md p-4 w-full max-w-4xl" style={{backgroundColor: 'var(--excel-color)'}}>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{color: 'var(--primary-text-color)'}}>Uploads</h2>
        
        <table className="min-w-full border-separate" >
          <thead>
            <tr>
              <th className="py-2 px-4 border-b" style={{color: 'var(--primary-text-color)'}}>Sl No.</th>
              <th className="py-2 px-4 border-b" style={{color: 'var(--primary-text-color)'}}>Link</th>
              <th className="py-2 px-4 border-b" style={{color: 'var(--primary-text-color)'}}>Prefix</th>
              <th className="py-2 px-4 border-b" style={{color: 'var(--primary-text-color)'}}>Add Tags</th>
              <th className="py-2 px-4 border-b" style={{color: 'var(--primary-text-color)'}}>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center" style={{color: 'var(--primary-text-color)'}}>{row.serial}</td>
                <td className="py-2 px-4 border-b text-center">
                  <a
                    href={row.link}
                    target="_blank"
                    // rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {row.link}
                  </a>
                </td>
                <td className="py-2 px-4 border-b text-center" style={{color: 'var(--primary-text-color)'}}>{row.data}</td>
                <td className="py-2 px-4 border-b text-center">
                  <select
                    value={row.selectedOption}
                    onChange={(e) => handleSelectChange(e, index)}
                    className="p-2 border rounded-md"
                    style={{color: '#000000'}}
                  >
                    <option value="" disabled>Select Tags</option>
                    {options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {row.selectedOption}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
