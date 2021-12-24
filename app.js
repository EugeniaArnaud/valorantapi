 const btn= document.getElementById("btnGetData")
 const container = document.getElementById("characters")
 btnGetData.addEventListener("click", getData);
 const URL = "https://valorant-api.com/v1/agents";

 async function getData () {
      const res = await fetch ("https://valorant-api.com/v1/agents");
     const data = await res.json();

    renderData(data.data);
    btn.setAttribute ("disabled",true);
     
     }

     function renderData(characters) {
         characters.forEach((char) => {
             const cardBody = document.createElement("div");
             cardBody.classList.add("card")
             cardBody.innerHTML = `
             <p class= title>${char.displayName}</p>
             <img src="${char.bustPortrait}"></img>
             <p class= text>${char.description}</p>
             `;
             container.appendChild(cardBody);
         });
     }


//     fetch ("https://valorant-api.com/v1/agents") 
// .then ((res) => res.json()) 
// .then ((json) => (data = json));

// // ctrl k c para comentar
