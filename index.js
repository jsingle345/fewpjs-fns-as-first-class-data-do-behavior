/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
    greet = (time) => {
      const mytime = parseInt(time.split(":")[0])
      
      if (mytime < 12){
      return `Good Morning`
      }
      else if (mytime > 17){
      return `Good Evening`
      }
      else 
      return `Good Afternoon`

    }


/* Write your implementation of displayMessage() */
    function displayMessage(msg){
       greeting = document.querySelector('#greeting');
      greeting.innerText = (msg);
    }


  //   * Write your implementation of displayMessage() */
  //  //   function displayMessage(msg){
  //  //       greeting = document.getElementById('greeting');
  //  //          greeting.innerText = msg
            
  //  //      }

















