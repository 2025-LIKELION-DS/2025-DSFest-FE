import React from 'react';
import * as C from '@notice/components/ContentStyle';

function Content({ title, preview, previewImg, onClick }) {
  return (
    <C.Content onClick={onClick}>
      <C.Left>
        <C.Title>{title}</C.Title>
        <C.Preview>{preview}</C.Preview>
      </C.Left>
      {previewImg && <C.Right $img={previewImg} />}
    </C.Content>
  );
}

export default Content;
