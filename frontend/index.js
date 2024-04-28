async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  
    let learnerResponse = await axios.get('http://localhost:3003/api/learners');
    let mentorsResponse = await axios.get('http://localhost:3003/api/mentors')
    let learnersData = learnerResponse.data;
    let mentorsData = mentorsResponse.data;
   console.log(learnersData)
   console.log(mentorsData)
    let combinedData = learnersData.map(learner => {
      let mentorsName = learner.mentors.map(id => {
        let mentor = mentorsData.find(mentor => mentor.id === id);
        return mentor.firstName + ' ' + mentor.lastName;
      });
      return {...learner, mentors: mentorsName}
    })
    console.log(combinedData)

    //select the p element with class 'info'
    const infoElement = document.querySelector('.info');
    infoElement.textContent = 'No learner is selected'

    //render data

    const renderLearner = learner => {
      //create div
      const card = document.createElement('div');
      card.className = 'card'
      // const infoContainer = document.createElement('div')
      const name = document.createElement('h3')
      // const id = document.createElement('p')
      // id.className = 'id'
      // id.style.display = 'none'
      const email = document.createElement('div')
      // email.className = 'email'
        const mentors = document.createElement ('ul')
      // mentors.className = 'mentors'
      // console.log(mentors)
      // style
      //const style = document.createElement('style')
      // style.textContent = `
      // .learner-card {
      //   display: flex;
      //   flex-direction: column;
      //   border: 1px solid #333;
      //   border-radius: 5px;
      //   padding: 10px;
      //   margin: 10px;
      //   background-color:#f9f9f9;
      //   width: 500px;
      //   box-shadow: 0 2px 5px rgba(0,0,0,0.15)
      // }
      // .highlighted {
      //   background-color: #d9d9d9 !important;
      // }
      // .info-container {
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      // }
      // `;
      //document.head.append(style)
      // content
      card.className ='card';
      // infoContainer.className = 'info-container';
      name.textContent = learner.fullName;
      
      email.textContent = ` ${learner.email}`
      mentors.textContent = `Mentors: ${learner.mentors.join(', ')}`
      //dropdown
      const dropdown = document.createElement('h4');
      dropdown.classList.add('closed')
      // const selectedOption = document.createElement('button')
       const optionsList = document.createElement('ul');
      // //style dropdown
      // dropdown.style.position = 'relative'
      // optionsList.style.width = '100%'
      // optionsList.style.display = 'none'
      // optionsList.style.backgroundColor = '#f9f9f9'
      // optionsList.style.listStyleType = 'none'
      // optionsList.style.padding = '0'
      // optionsList.style.margin = '0'
      // optionsList.style.width = '100%'
      //event listener to selectedOption
      // card.addEventListener('click', () => {
      //   id.style.display = id.style.display === 'none' ? 'block' : 'none'
      // })
      

      // selectedOption.addEventListener('click', (event) => {
      //   event.stopPropagation();
      //   optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none'
      // })
    
      //add mentors to optionsList
      learner.mentors.forEach(mentor => {
        const option = document.createElement('li');
        // optionsList.style.padding = '10px'
        option.textContent = mentor
        optionsList.appendChild(option)
      
      
    })
    // selected option to mentors
    dropdown.textContent = `Mentors`
    // dropdown.appendChild(selectedOption)
    // dropdown.appendChild(optionsList)
    
      //append
      // infoContainer.append(name, id, email)
      card.append(name, email, dropdown, optionsList)
      // card.appendChild(dropdown)
      dropdown.addEventListener('click', () => {
          if (dropdown.classList.contains('closed')) {
            dropdown.classList.remove('closed')
            dropdown.classList.add('open')
          } else  {
            dropdown.classList.remove('open')
            dropdown.classList.add('closed')
          }
        })
      return card
    }

    // loop over combined data,generate cards and put them in the Dom

    const renderAllLearners = learners => {
      const container = document.querySelector('.cards')

      //apply style

      // container.style.display = 'flex'
      // container.style.flexDirection = 'column'
      // container.style.alignItems ='center'

      learners.forEach(learner => {
        const card = renderLearner(learner)
        container.appendChild(card)
        // 
        card.addEventListener('click', (evt) => {
          console.log(evt)
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
          // if (card.classList.contains('selected')) {
            // } else  {
              // if (card.classList.contains('selected') && evt.target === card) {
              //   card.classList.remove('selected')
              // }  
              if (card === evt.target){
                card.classList.toggle('selected')
                infoElement.textContent = `The selected learner is ${learner.fullName}`
              } else {
                  card.classList.remove('selected')
                  
                }
                
                // const idElement = card.querySelector('.id');
                // idElement.style.display = 'block'
                // const nameElement = card.querySelector('h3')
                // nameElement.textContent += `, ID: ${learner.id}`
                // const mentorsElement = card.querySelector('.mentors')
                // mentorsElement.style.display = 'block'
              })
              // card.classList.remove('selected')
              // const idElement = card.querySelector('.id');
              
              if (!card.classList.contains('selected')) {
          infoElement.textContent = 'No learner is selected'
        }
          
          // const nameElement = card.querySelector('h3')
          // nameElement.textContent = nameElement.textContent.split(',')[0]
          // const mentorsElement = card.querySelector('.mentors')
          
          // const dropdownElement = card.querySelector('ul');
          // dropdownElement.style.display = 'none'
         });
        
      })
    // }
  }

    renderAllLearners(combinedData)
    
  
  

  



  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
