 
 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 

import { observer } from "mobx-react";

function Main({ children }) {
  
 
  return (
  <div className=" my-8 p-4 "  >  
      {children}
  </div>
  ) 
}

  


export default observer(Main);


