const url = "https://61f3934510f0f7001768c4c4.mockapi.io/api/scammer/scammers";
// fetch api

// func render scamitem in scamlist
function renderItem(item) {
  const template = `
  <div class="scamlist-item">
            <div class="scamlist-item-heading">
              <span class="scamlist-heading-number">#${item.id}</span>
              <span class="scamlist-heading-name">${item.accountHolder}</span>
              <span class="scamlist-heading-details">Detail</span>
            </div>
            <div class="scamlist-content">
              <div class="scamlist-content-info">
                <span class="scamlist-info-left">
                  <ion-icon name="person"></ion-icon>
                  Full-name
                </span>
                <span class="scamlist-info-right"> ${item.accountHolder}</span>
              </div>
              <div class="scamlist-content-info">
                <span class="scamlist-info-left">
                  <ion-icon name="call"></ion-icon>
                  Phone
                </span>
                <span class="scamlist-info-right"> ${item.phoneNumber} </span>
              </div>
              <div class="scamlist-content-info scamlist-image">
                <span class="scamlist-info-left">
                  <ion-icon name="images"></ion-icon>
                  Image
                </span>
                <span class="scamlist-info-right">
                  <div class="scamlist-info-image">
                    <img class="info-image"
                      src="${item.images}"
                      alt=""
                    />
                  </div>
                </span>
              </div>
              <div class="scamlist-content-info">
                <span class="scamlist-info-left">
                  <ion-icon name="person"></ion-icon>
                  Form-of-fraud
                </span>
                <span class="scamlist-info-right scam-content"> ${item.content} </span>
              </div>
            </div>
            </div>`;
  listScam.insertAdjacentHTML("beforeend", template);
}
// get data
async function getData(link = url) {
  const res = await fetch(link);
  const data = await res.json();
  console.log(data);

  listScam.innerHTML = "";
  if (data.length > 0 && Array.isArray(data)) {
    data.forEach((item) => {
      renderItem(item);
    });
  }
}
getData();
