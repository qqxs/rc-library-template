import React from 'react';
export interface HelloWorldProps {
  value: string;
}
/**
 * @description HelloWorld component
 * @param HelloWorldProps
 * @returns
 */
const HelloWorld: React.FC<HelloWorldProps> = ({ value }) => {
  return <p>{value}</p>;
};

export default HelloWorld;
