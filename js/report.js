window.addEventListener("load", () => {
  const url =
    "https://61f3934510f0f7001768c4c4.mockapi.io/api/scammer/scam";
  const formReport = document.querySelector(".container-report-form ");

  function loading() {
    const template = `<div class="loading">
      <div class="loader"></div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
  // FUNC POST DATA
  async function postData({ accountHolder, phoneNumber, images, content }) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        accountHolder,
        phoneNumber,
        images,
        content,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  formReport.addEventListener("submit", async function (e) {
    e.preventDefault();

    const scammerList = {
      accountHolder: this.elements["accountHolder"].value,
      phoneNumber: this.elements["phoneNumber"].value,
      images: this.elements["images"].value,
      content: this.elements["content"].value,
    };
    loading();
    await postData(scammerList);
    const loader = document.querySelector(".loader");
    if (loader) {
      const remove = loader.parentNode;
      remove.parentNode.removeChild(remove);
    }
    this.reset();

    // showSuccess();
  });
});
