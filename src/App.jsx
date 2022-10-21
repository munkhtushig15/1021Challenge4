import './App.css';
import { useState } from 'react';

const ArticleOne = () => {
  <div className='bigContainer'>
      <div className='articleContainer'>
        <i className='rate'># # # # #</i>
        <span className='texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi animi rem consequatur alias consectetur repellat nihil, ducimus deserunt obcaecati veniam ipsa. Sapiente unde magnam doloribus? Laboriosam neque quas dolorem!</span>
        <div className='userInformation'>
          <img className='userPhoto' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          <span className='userName'>
            <strong>hi</strong>
          </span>
        </div>
      </div>
    </div>
}
const ArticleTwo = () => {
    <div className='bigContainer'>
      <div className='articleTwoContainer'>
        <img className='articleTwoPhoto' src="" alt="" />
        <h2 className='articleTwoH2'>Lorem ipsum dolor sit, amet consectetur </h2>
        <span className='articleTwoText'></span>
        <div className='articleTwoUserInformation'>
          <img className='userPhoto' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          <span className='articleTwoUserName'>Name</span>
          <span className='articleTwoDate'>2nd Jan,2022</span>
        </div>
      </div>
    </div>  
}

function App() {
  return (
    <div className='bigContainer'>
      <div className='articleContainer'>
        <i className='rate'># # # # #</i>
        <span className='texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi animi rem consequatur alias consectetur repellat nihil, ducimus deserunt obcaecati veniam ipsa. Sapiente unde magnam doloribus? Laboriosam neque quas dolorem!</span>
        <div className='userInformation'>
          <img className='userPhoto' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          <span className='userName'>
            <strong>hi</strong>
          </span>
        </div>
      </div>
      <div className='articleTwoContainer'>
        <img className='articleTwoPhoto' src="https://gmedia.playstation.com/is/image/SIEPDC/cyberpunk-2077-edgerunners-image-block-01-en-13sep22?$native$" alt="" />
        <h2 className='articleTwoH2'>Lorem ipsum dolor sit, amet consectetur </h2>
        <span className='articleTwoText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui maxime perspiciatis quos odio alias tempore autem cum perferendis ex suscipit atque velit, aspernatur accusamus tenetur cupiditate saepe voluptatum assumenda consequuntur?</span>
        <div className='articleTwoUserInformation'>
          <img className='userPhoto' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
          <span className='articleTwoUserColor articleTwoUserName'>Name</span>
          <span className='articleTwoUserColor'>|</span>
          <span className='articleTwoDate articleTwoUserColor'>2nd Jan,2022</span>
        </div>
      </div>
    </div>  
  );
}

export default App;
