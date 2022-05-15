import { useState } from 'react';

import { FormInput } from './Form/FormInput';
export const Details = () => {
  const [detailFields, setDetailFields] = useState([]);

  const handleAddFields = () => {
    setDetailFields([...detailFields, { fieldName: '', fieldContent: '' }]);
  };

  const handleDeleteFields = (index) => {
    const data = [...detailFields];
    data.splice(index, 1);
    setDetailFields(data);
  };

  return (
    <ol className="list-inside list-decimal">
      {detailFields.map((fields, index) => (
        <li key={index} className="mb-4 border-b-2 bg-accent-50 p-4">
          <FormInput
            label="Název"
            labelClassName="mt-6 mb-1 block text-sm text-stone-700"
            className="mb-4 block w-full border-b-2 border-stone-300 bg-white p-2"
            defaultValue={fields.fieldName}
            id={`fieldName[${index}]`}
          />
          <FormInput
            label="Obsah"
            labelClassName="mt-6 mb-1 block text-sm text-stone-700"
            className="mb-4 block w-full border-b-2 border-stone-300 bg-white p-2"
            defaultValue={fields.fieldContent}
            id={`fieldContent[${index}]`}
          />

          <div className="flex">
            <button
              className="bg-red-700 p-2 text-white"
              onClick={() => handleDeleteFields(index)}
            >
              smazat
            </button>
          </div>
        </li>
      ))}
      <button
        className="bg-accent-500 p-4 text-white"
        onClick={handleAddFields}
      >
        +
      </button>
    </ol>
  );
};
