document.addEventListener("DOMContentLoaded", function () {
    //Set footer year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Doğrudan Medium RSS feed URL'si
    const rssFeedUrl = "https://medium.com/feed/@kerimsenturk5734";
    const blogsContainer = document.getElementById("blogs-container");

    // RSS verisini almak için bir proxy servisi kullanıyoruz
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssFeedUrl)}`;

    // RSS verisini çek
    fetch(proxyUrl)
        .then((response) => response.json())
        .then((data) => {
            //Clear the loading animation from container
            document.getElementById("loading-spinner").remove();
            // Gelen veriyi XML formatından parse et
            const parser = new DOMParser();
            const xml = parser.parseFromString(data.contents, "application/xml");
            const items = xml.querySelectorAll("item");
            if (items.length > 0) {
                items.forEach((item) => {
                    // XML verisinden başlık, link, açıklama, ve thumbnail bilgilerini al
                    const title = item.querySelector("title")?.textContent;
                    const link = item.querySelector("link")?.textContent;
                    const pubDate = item.querySelector("pubDate")?.textContent;

                    let thumbnailURL;
                    item.childNodes.forEach((node)=>{
                        // get content
                        if(node.nodeName === "content:encoded")
                            // parse thumbnail element from content
                            thumbnailURL = node.textContent.match(/<img[^>]+src="([^">]+)"/)?.at(1);
                    })

                    // Blog içeriğini oluştur
                    //<img src="${thumbnailURL}" class="card-img-top" alt="${title}">
                    const blogCard = `
                        <div class="col-md-4">
                            <a href="${link}" class="text-decoration-none" target="_blank">
                                <div class="card">
                                    <img src="${thumbnailURL}" class="card-img-top" alt="${title}">
                                    <div class="card-body">
                                        <h5 class="card-title">${title}</h5>
                                        <p class="lite-text">${pubDate}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    blogsContainer.innerHTML += blogCard;
                });
            } else {
                blogsContainer.innerHTML = `<p class="text-center text-danger">No blogs found in the RSS feed.</p>`;
            }
        })
        .catch((error) => {
            console.error("RSS feed yükleme hatası:", error);
            blogsContainer.innerHTML = `<p class="text-center text-danger">An error occurred while fetching the RSS feed.</p>`;
        });
});