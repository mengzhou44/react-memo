import React, {memo } from 'react';

const MyMemo = function() {
  console.log('Memo  Function!');
  return <div>Memo Function </div>;
}

export default memo(MyMemo);