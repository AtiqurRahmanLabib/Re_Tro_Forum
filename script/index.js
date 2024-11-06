const loadPost = async (inputText=coding) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputText}`);
        const data = await res.json();

        if (Array.isArray(data.posts)) {
            const posts = data.posts;
            posts.forEach(post => renderPost(post));
        } else {
            console.error("Unexpected API response format:", data);
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

const renderPost = (post) => {
    const postContainer = document.getElementById('post-container');
    const div = document.createElement('div');
    div.classList = `bg-[#F3F3F5] rounded-[16px] p-6 w-[772px] shadow-md h-[270px] mt-7 hover:border `;
    div.innerHTML = `
    <div class="bg-[#F3F3F5] w-[672px] h-[170px] flex">
    <div class="w-[72px] h-[72px]  rounded-full">
<img src="${post.image}" alt="Post Image">
    </div>
    <div class="w-[596px] h-full  ml-6">
      <div class="flex ">
        <p class=" font-medium text-[#14px] text-[#12132DCC]">#<span
            class="font-medium text-[#14px] text-[#12132DCC]">${post.category}</span></p>
        <p class="ml- font-medium text-[#14px] text-[#12132DCC]">author: <span
            class="mt- font-medium text-[#14px] text-[#12132DCC]">${post.author.name}</span></p>
      </div>
      <h1 class="font-bold text-[20px] text-[#12132D] mt-1">
       ${post.title}
      </h1>
      <p class="mt-2 text-[16px] text-[#12132DCC]">${post.description}</p>
      <hr class="border-dotted mt-9">
      <div class="flex justify-between mt-9">
        <div class="flex w-[300px] justify-around">
          <img src="./images/tabler-icon-message-2.png" alt="">
        <p class="text-[16px] text-[#12132DCC]">${post.comment_count}</p>
        <img src="./images/Group 16.png" alt="">
        <p class="text-[16px] text-[#12132DCC]">${post.view_count}</p>
        <img src="./images/Group 18.png" alt="">
        <p class="text-[16px] text-[#12132DCC]">${post.posted_time}</p>
        </div>
        <div>
          <img src="./images/Group 40106.png" alt="">
        </div>
      </div>
      
    </div>
  </div>
      
    `;
    postContainer.appendChild(div);
};
function searchFeild(){
    const inputFild = document.getElementById('inputFeild')
    const inputText = inputFild.value
    console.log(inputText)
    loadPost(inputText)
}
document.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        searchFeild()
    }
})
postContainer.textContext = ''

loadPost();

