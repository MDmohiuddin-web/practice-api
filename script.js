const phones=async (searchtext,isshowall) =>
{
    const  response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);
    // const  response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    
    const data=await response.json();  
    const phones=data.data;
    //  console.log(phone);
    // displayphone(phone,isshowall);
    displayphone(phones,isshowall);
}




const displayphone = (phones,isshowall)=>{

    const phonecontiner=document.getElementById('content-countiner');
    phonecontiner.innerText= '';
    console.log(phones.length);
    console.log(phones);

    const showallcontainer=document.getElementById('show-all-container');

    if(phones.length>12 && !isshowall){
        showallcontainer.classList.remove('hidden');
    }
else{
    showallcontainer.classList.add('hidden');
}
console.log('is show  all',isshowall);
    //show only first 10 phone if not  showing all
   if(!isshowall){
    phones=phones.slice(0,12);
   }


    // phones=phones.slice(0,12);

    phones.forEach(phone => {
        // console.log(phone);
        const phonecard=document.createElement('div');
    phonecard.classList=`card max-w-96 m-auto py-10 bg-gray-200 my-5 shadow-xl`;
    phonecard.innerHTML=`
         <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions flex justify-center">
                        <button onclick="showdetels('${phone.slug}')" class="btn btn-primary ">Show betels</button>
                      </div>
                    </div>
        
        `;
        phonecontiner.appendChild(phonecard);
    });

toggellodingspinar(false) ; 
}
const swhoall=() =>{
    document.getElementById('show-all-container');
    handel(true);

}




 const toggellodingspinar=(isshowall)=>{
    const lodingspinar= document.getElementById('loding-spinar');
    
    if (isshowall){
        lodingspinar.classList.remove( 'hidden');
    }
    else{
         lodingspinar.classList.add( 'hidden');
    }
}

const showdetels = async (id) =>{
    console.log('clicked on show detals ',id); 

    // lode singel dala
    const  response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  
   
    const data = await response.json();  
   const phone =data.data;
    showphonedetels(phone)
    
}

const showphonedetels = (phone) =>{

    console.log(phone);

    const phone_name=document.getElementById('phone-name');
    phone_name.innerText=phone.name;


    const showdetelscontiner=document.getElementById('showdetelscontiner');
    showdetelscontiner.innerHTML=`
    
    <img src="${phone.image}" alt="" class="text-center ">
    <p> <span>storage:</span>${phone?.
        mainFeatures?.storage}</p>
  
   <p> <span>memory:</span>${phone?.
    mainFeatures?.memory}</p>
  
   <p> <span>reles date:</span>${phone?.releaseDate}</p>
   <p> <span>brand:</span>${phone.brand}</p>
    
    `;

    show_my_modal.showModal();
}
const handel=(isshowall)=>{
    toggellodingspinar(true);
    // console.log('handel click event');
    const searchfild=document.getElementById('search-fild');
    const searchtext=searchfild.value;
    console.log(searchtext);
phones(searchtext,isshowall);

 }
phones('samsung');