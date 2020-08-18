import React from "react";

import "./definition-list.scss";

type DefinitionListProps = {
  children:
    | React.ReactElement<DefinitionListItemProps>
    | Array<React.ReactElement<DefinitionListItemProps>>;
};
type DefinitionListItemProps = { term: string; definition: string };

const DefinitionList: React.FC<DefinitionListProps> = ({ children }) => (
  <dl className="definition-list">
    {children}
  </dl>
);

const DefinitionListItem: React.FC<DefinitionListItemProps> = (
  { term, definition },
) =>
  <div className="definition-list-row">
    <dt className="definition-list-term">{term}</dt>
    <dd className="definition-list-definition">{definition}</dd>
  </div>;

export { DefinitionList, DefinitionListItem };
