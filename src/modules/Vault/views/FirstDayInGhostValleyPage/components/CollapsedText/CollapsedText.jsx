import React, { useState } from 'react';

import { TitleButton, Content } from './CollapsedText.styled';

export const CollapsedText = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <TitleButton onClick={() => setCollapsed(!collapsed)}>
        {title}
      </TitleButton>

      {!collapsed && (
        <Content>
          {children}
        </Content>
      )}
    </>
  );
};
