import React from 'react'

export default function SectionTitle({title,mb,textAlign}) {
  
  const margin = mb || 'mb-0';

    return (
    <div className={`w-full flex items-center  ${textAlign === 'center' ? `justify-${textAlign}` :'justify-start'}`}>
        <h3 className={`text-3xl text-[#272343] font-semibold capitalize ${margin}`}>{title}</h3>
    </div>
  );
};
