
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
    console.log(el.img)
})
function  displayData(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row3 a").append(img)
}

var imgrow4=[
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/a18e88b5-5f87-4197-a8a2-0feeda4a31f41650953683597-Urbanic.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/f79f2d4e-5885-48c0-8954-37943ea44b1c1650953683453-Louis_Philippe.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/9fa556b1-b1a9-48af-a28c-077d41450c3b1650953683361-Allen_Solly.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/427229a3-82c8-4c04-8d42-17f3225f9dbe1650953683523-Reebok.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/c892753c-1497-4806-ad1c-0a6a34e9f5a41650953683401-Crocs.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/cb14c9cc-33e9-43f2-a259-8f54f2a840671650953683376-Aurelia.jpg"},
{img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/26/ce452992-91eb-481a-a42b-4d7a392ac40c1650953683445-Levis.jpg"}
]

imgrow4.forEach(function(el){
    displayData4(el);
    // console.log(el.img)
})
function  displayData4(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row4 a").append(img)
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


    // {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/28242c4e-6b04-41e7-80ef-4433622110ee1651081457741-HP_02.jpg"},
//     {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/0dd1660c-328d-46be-9a1f-b4c3039ec2731651081457748-HP_03.jpg"},
//     {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/a5c434db-0916-4de5-bf82-fc21165a11d31651081457755-HP_04.jpg"},
//     {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/a24e03cc-9e81-4139-9569-557f0fcb9f671651081457761-HP_05.jpg"},
//     {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/3384bd6e-471a-430f-8a2c-1f2db0ce7c0e1651081457767-HP_06.jpg"},
//     {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/4cfac6c2-3824-4c1b-a719-a05b204dfc7e1651081457774-HP_07.jpg"},
// // 66666666666666
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/dd768490-9611-402e-96ce-baa0ae44f8271651081457781-HP_08.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/57d477d7-5f9b-4edd-bcb2-7f99a4d053841651081457787-HP_09.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/6eee3e96-3b4b-4fd3-9339-c0bb9508925a1651081457793-HP_10.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/b82f96cd-ecb6-4362-99d9-955928182a771651081457800-HP_11.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/424cc5db-99be-402f-b5b3-bb29187a34081651081457806-HP_12.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/6b977ed4-44de-4b55-8474-576b2ac604551651081457813-HP_13.jpg"},



// // 1222221212121 12
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/816c8fdf-6666-400e-a699-0b0d263dd54b1651081457819-HP_14.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/5cf8011c-3344-4c1d-8e37-02b4bd1cb0c21651081457826-HP_15.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/70e806ae-8f05-46da-9ff6-0401f0e5ae021651081457833-HP_16.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/ac45d699-9ecd-459a-be49-7fe1e4159d741651081457840-HP_17.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/b25148e7-5d10-4630-bf1c-2809f144f3181651081457846-HP_18.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/86f70036-5826-4eb1-80aa-352016c83e021651081457853-HP_19.jpg"},
// // 18 



// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/d41fa153-e63b-4a59-8e9a-60cba8b654d91651081457860-HP_20.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/8eac4e18-b0a9-4970-a053-07cc0ca05ee81651081457867-HP_21.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/51a4aaed-e4fd-418b-b07b-86a54b2525cc1651081457874-HP_22.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/08f3da5a-470d-4767-8474-7a45e27a52ab1651081457880-HP_23.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/0cb91440-1a32-4b45-8a0d-5fd5967c72c11651081457887-HP_24.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/ae74d9db-6fd9-4e5c-bcdd-37f0d290096c1651081457894-HP_25.jpg"},
// // 24


// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/640914ef-9ab5-47c1-9b47-7f3aa6b52d701651081457900-HP_26.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/99d432a2-d17d-4061-8ccf-c8aeb729c0921651081457907-HP_27.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/952e4c56-6987-4c60-ae98-ce7a72e054f31651081457914-HP_28.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/e926212f-810f-4c14-9958-9927d48e0ff61651081457921-HP_29.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/7a20f285-9b39-4fc9-a5c1-9802960edd061651081457930-HP_30.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/b7ac016b-bd60-4552-a3d2-9fd0d5f4177d1651081457937-HP_31.jpg"},
// // 30


// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/c5e9b51d-4754-4258-9d0e-12f5ba7d24b31651081457944-HP_32.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/c5e9b51d-4754-4258-9d0e-12f5ba7d24b31651081457944-HP_32.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/18764d2d-9eb8-4b4f-ac9f-0088bce504e01651081457959-HP_34.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/c235f07d-a125-48d5-91a1-cc211dd531151651081457966-HP_35.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/c5e9b51d-4754-4258-9d0e-12f5ba7d24b31651081457944-HP_32.jpg"},
// {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/27/c5e9b51d-4754-4258-9d0e-12f5ba7d24b31651081457944-HP_32.jpg"},


]


imgrow5.forEach(function(el){
    displayData5(el);
    // console.log(el.img)
})
function  displayData5(el){
    var img=document.createElement("img")
    img.setAttribute("src",el.img)
    document.querySelector("#row5 a").append(img)
}


var neww=document.querySelector("#newname")
var neee=JSON.parse(localStorage.getItem("newname"))
console.log(neee[0].hak);
neww.innerHTML=neee[0].hak || []