document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener(`click`, (e) => {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada informasi yang tersedia</i>";

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(`.modalImage`).innerHTML = "";
    document.querySelector(`.modalImage`).appendChild(image);
    document.querySelector(`.modalHarga`).innerHTML = harga;

    let pesan = `form.pemesanan.html`;

    document.querySelector(`.btnBeli`).href = pesan;
  });
});

const btnSend = document.querySelector(`.send`);

btnSend.addEventListener("click", () => {
  /* Inputan Formulir */
  var input_name = $(`#name`).val(),
    input_email = $(`#email`).val(),
    input_phone = $(`#phone`).val(),
    input_alamat = $(`#alamat`).val(),
    input_product = $(`#product`).val(),
    input_description = $(`#description`).val();

  /* Pengaturan Whatsapp */
  var walink = "https://web.whatsapp.com/send",
    phone = "6287876968170",
    text = "Halo saya ingin memesan ",
    text_yes = "Pesanan Anda berhasil terkirim.",
    text_no = "Isilah formulir terlebih dahulu.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if (
    input_name != "" &&
    input_email != "" &&
    input_phone != "" &&
    input_alamat != "" &&
    input_product != "" &&
    input_description != ""
  ) {
    /* Whatsapp URL */
    var checkout_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      text +
      "%0A%0A" +
      "*Nama* : " +
      input_name +
      "%0A" +
      "*Email* : " +
      input_email +
      "%0A" +
      "*Nomor Kontak / Whatsapp* : " +
      input_phone +
      "%0A" +
      "*Alamat* : " +
      input_alamat +
      "%0A";
    "*Produk* : " +
      input_product +
      "%0A" +
      "*Catatan* : " +
      input_description +
      "%0A";

    /* Whatsapp Window Open */
    window.open(checkout_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<div class="alert alert-success">' + text_yes + "</div>";
  } else {
    document.getElementById(`text-info`).innerHTML =
      '<div class="alert alert-danger">' + text_no + "</div>";
  }
});
