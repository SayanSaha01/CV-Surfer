const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Taylor Johnson",
      job: "web designer",
      img:
        // "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        "https://randomuser.me/api/portraits/women/75.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "intern",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "the boss",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        "https://randomuser.me/api/portraits/men/75.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 5,
      name: "Robert Pattinson",
      job: "Backend Developer",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        "https://randomuser.me/api/portraits/men/18.jpg",
      text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        ,
    },
    {
      id: 6,
      name: "NEha Agarwal",
      job: "Associate General",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        "https://randomuser.me/api/portraits/women/22.jpg",
      text:
      "Lorem ipsum dolores mandes hyanes ipso fronto iniesta minerva slur bayern kings landing aimo frendss ipoo stumpendows magnum developero john dolores umbridge colores hogwarts togethero"
    },
    {
      id: 7,
      name: "Andy Murray",
      job: "Flutter Developer",
      img:
        //"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  const picture = document.getElementById('person-img');
  const name=document.getElementById('author');
  const duty=document.getElementById('job');
  const info=document.getElementById('info');
  
  //Buttons
  const prevBtn=document.querySelector(".prev-btn");
  const nextBtn=document.querySelector(".next-btn");
  const randomBtn=document.querySelector(".random-btn");
  
  let currentItem=0;
  
  window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
  });
  
  function showPerson(currentItem){
    const item=reviews[currentItem];
    picture.src=item.img;
    name.textContent=item.name;
    duty.textContent=item.job;
    info.textContent=item.text;
  }
   
  nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
      currentItem=0;
    }
    showPerson(currentItem);
  })
  
  prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
      currentItem=reviews.length-1;
    }
    showPerson(currentItem);
  })