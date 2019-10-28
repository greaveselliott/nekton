import React from 'react';
import './select.scss';

type options = {
  value: string;
  text: string;
};

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  placeholderText?: string;
  selectOptions: options[];
}

const Select: React.FC<Props> = ({
  id = undefined,
  placeholderText = undefined,
  selectOptions,
  ...props
}) => {
  return (
    <div className="select-wrapper">
      <select className="select-field" id={id} {...props}>
        {placeholderText && <option value="">{placeholderText}</option>}
        {selectOptions.map((selectOption) => (
          <option key={selectOption.value} value={selectOption.value}>
            {selectOption.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
