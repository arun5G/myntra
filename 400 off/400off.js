
  var imgrow3=[
    {
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/1ff4a91b-5bb2-4a67-90c8-94f2fc98ee3c1650529239139-BudgetBuys_HairAccessories.jpg"
    },
{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/56cda127-ed4a-47b6-b527-da09374b80e71650529239254-BudgetBuys_Necklaces_Chains.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/8425b6ae-bdb8-4ca9-9e8f-0b026fdab6131650529239356-BudgetBuys_SportsBras.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/17d6d7d7-8dc0-473a-abe1-9e95de4707531650529238837-BudgetBuys_ActivewearTees.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/cc737c79-12bb-4178-8115-159678c11af41650529238820-BudgetBuys_ActivewearK.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/60304d81-0310-4c10-bf56-70e0b455256d1650529238974-BudgetBuys_ComfyActivewear.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/158c3ed9-ba36-42db-a348-837a99bf16631650529239393-BudgetBuys_Suits_Blazers.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/2bbfdc41-5731-4b07-9315-cedda0412a101650529239337-BudgetBuys_Shorts_Skirts.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/b818a325-f717-44bd-9dcc-7459792a281d1650529239017-BudgetBuys_CuteDresses.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/0fa096de-3fe4-49a4-9f55-e3e864c656b11650529238954-BudgetBuys_ClothingSets.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/4abfd733-b830-4455-8248-4e4d6797bbee1650529239121-BudgetBuys_FormalShoes.jpg"
    },

{
        img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/21/57b7317f-142b-4774-a0fc-03c9f0a56a561650529238912-BudgetBuys_BestofKurtas.jpg"      
    },

]
imgrow3.forEach(function(el){
    displayData(el);
    // console.log(el.img)
    // great(el)
})
function  displayData(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row3").append(img)
}

var imgrow4=[
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/a18e88b5-5f87-4197-a8a2-0feeda4a31f41650953683597-Urbanic.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/f79f2d4e-5885-48c0-8954-37943ea44b1c1650953683453-Louis_Philippe.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/9fa556b1-b1a9-48af-a28c-077d41450c3b1650953683361-Allen_Solly.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/427229a3-82c8-4c04-8d42-17f3225f9dbe1650953683523-Reebok.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/c892753c-1497-4806-ad1c-0a6a34e9f5a41650953683401-Crocs.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/cb14c9cc-33e9-43f2-a259-8f54f2a840671650953683376-Aurelia.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/ce452992-91eb-481a-a42b-4d7a392ac40c1650953683445-Levis.jpg"}
]

imgrow4.forEach(function(el){
    displayData4(el);
    // console.log(el.img)
})
function  displayData4(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row4").append(img)
}


    var imgrow5=[

        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"},
    
    
    
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"},
    
    
    
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg"},
    
    

]


imgrow5.forEach(function(el){
    displayData5(el);
    // console.log(el.img)
})
function  displayData5(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row5").append(img)
}

// 0000000000000000000000000000000000000000





// document.querySelector("#desktop-header-cnt > div.desktop-bound > div.desktop-query > input")