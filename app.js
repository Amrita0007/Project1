

let jobs = [
    {
        image_title: 'photo/Template heading',
        id: '1',
        img_url: './girl.jpg',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'


    },
    {
        image_title: 'Green Kurta',
        img_url: './green_kurta.jpg',
        id: '2',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Home Decoration',
        img_url: './home_deco.jpg',
        id: '3',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Red Kurta',
        img_url: './red_kurta.jpg',
        id: '4',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Red Cloth',
        img_url: './red_skirt.jpg',
        id: '5',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'White Space',
        img_url: './white.jpg',
        id: '6',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Home Decoration',
        img_url: './home_deco.jpg',
        id: '3',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Yellow',
        img_url: './yellow.jpg',
        id: '8',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },
    {
        image_title: 'Red Cloth',
        img_url: './red_skirt.jpg',
        id: '5',
        categories: 'poster',
        size: '800x1024 px',
        authername: 'Appy Pie Team'



    },



]

let settime2 = setInterval(() => {

    let jobBox = document.querySelector('#iz1bu')

    if (jobBox) {
        clearInterval(settime2)




        let jobdataDiscriptions = ''
        jobdataDiscriptions += `
    <div class="job_cards_container"  style="display: flex;justify-content: space-between;">`
        jobs.forEach((item, index) => {
            jobdataDiscriptions += `
        <div class="job_card" id="job_card_${item.id}" style="max-width: 315px;border: 1px solid #E6E6E6;background-color: #fff;padding: 20px;"  data-jobDetailse='${JSON.stringify(item)}'>
        <img id="job-btn" src=${item.img_url}>
       
        </div>
        `

        })
        jobdataDiscriptions += `</div>`
        jobBox.insertAdjacentHTML("afterbegin", jobdataDiscriptions)



        // Opening the modal for each job

        function jobCardsHandler() {
            let jobCards = document.querySelectorAll('.job_card')
            console.log('jobCards', jobCards)
            jobCards.forEach((card, index) => {
                card.querySelector("#job-btn").addEventListener('click', () => {
                    console.log(card.id, `job_card_${card.id}`)
                    if (card.id == `${card.id}`) {
                        let jobDetailseObj = JSON.parse(card.dataset.jobdetailse)

                        let jobModalBox = `<div class="modal fade show" id="jobmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;background-color: #141313a1;">
              <div class="modal-dialog" role="document" style="max-width: 90%;">
                <div class="modal-content">
                  <div class="modal-header-mainDiv" >

                    <button type="button" class="close" id="closeJobModal" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body-maindiv-job-box">

                        <div class='mainRoleDiv'>
                                    <div class="careerImage">
                                        <img src=${jobDetailseObj.img_url} alt="">
                                    </div>
                                    
                        
                            
                            </div>
                            <div class='keyRoleDiv '>
                            <div class='keyRoleDivCatagory'>
                                    <div class="image_title"><p>${jobDetailseObj.image_title}</p></div>
                                    <div class="categories_title"><span>Categories: </span><p>${jobDetailseObj.categories}</p>
                                    <span>Size: </span> <p>${jobDetailseObj.size}</p></div>
                                    <div class="author_name"><p>${jobDetailseObj.authername}</p></div>
                                    <div class="Template_button"><a href="#">Use this Template</a></div>

                                
                            
                                    </div>
                                
                            </div>
                   
</div>
                <div>
            <h1 class="tag_name">Tags:</h1>
            <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Advertisement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Poster</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Paper</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Test</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Broucher</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Flyer</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>   
 <div>
    <h1 class="tag_moreLike">More like this</h1>
    </div> 
    
    <div class="row image _container">
     <div class="col-2"><img src="../db/red_skirts.jpg"></div>
    <div class="col-2"><img src="../db/white.jpg"></div>
     <div class="col-2"><img src="../db/home_deco.jpg"></div>
      <div class="col-2"><img src="../db/red_kurta.jpg"></div>
      <div class="col-2"><img src="../db/girl.jpg"></div>
      <div class="col-2"><img src="../db/red.jpg"></div>

  </div>
   

                  </div>
                </div>
            </div>`


                        document.body.insertAdjacentHTML("beforeend", jobModalBox)
                        document.querySelector('#jobmodal').style.display = "block"
                        document.body.style.overflow = "hidden"


                    }
                    document.querySelector('#closeJobModal')?.addEventListener('click', function () {
                        document.querySelector('#jobmodal').style.display = "none"
                        document.querySelector('#jobmodal').remove()
                        document.body.style.overflow = "auto"
                    });

                })

            })
        }
        jobCardsHandler()
    }

}, 500)