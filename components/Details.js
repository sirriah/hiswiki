import { useState, useEffect } from 'react';

import { FormInput } from './Form/FormInput';

export const Details = ({ detailsDataCallback, defaultValue }) => {
  const [detailFields, setDetailFields] = useState(defaultValue || []);

  useEffect(() => {
    detailsDataCallback(detailFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailFields]);

  const handleAddFields = () => {
    setDetailFields([...detailFields, { fieldName: '', fieldContent: '' }]);
  };

  const handleDeleteFields = (indexToRemove) => {
    const newData = detailFields.filter((_, index) => index !== indexToRemove);
    setDetailFields(newData);
  };

  const handleFormChange = (index, event) => {
    const data = [...detailFields];
    data[index][event.target.name] = event.target.value;
    setDetailFields(data);
  };

  return (
    <ol className="list-inside list-decimal">
      {detailFields.map(({ fieldContent, fieldName }, index) => (
        <li key={index} className="mb-4 border-b-2 bg-accent-50 p-4">
          <FormInput
            label="Název"
            name="fieldName"
            labelClassName="mt-6 mb-1 block text-sm text-stone-700"
            className="mb-4 block w-full border-b-2 border-stone-300 bg-white p-2"
            value={fieldName}
            onChange={(event) => handleFormChange(index, event)}
            id={`fieldName[${index}]`}
          />
          <FormInput
            label="Obsah"
            name="fieldContent"
            labelClassName="mt-6 mb-1 block text-sm text-stone-700"
            className="mb-4 block w-full border-b-2 border-stone-300 bg-white p-2"
            value={fieldContent}
            onChange={(event) => handleFormChange(index, event)}
            id={`fieldContent[${index}]`}
          />

          <div className="flex">
            <button
              type="button"
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
        type="button"
      >
        +
      </button>
    </ol>
  );
};
