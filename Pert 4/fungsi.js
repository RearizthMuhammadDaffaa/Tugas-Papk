var dataBarang = [
  "Bola",
  "Buku tulis",
  "Komputer"
]

function  showBarang() {
    var listBarang = document.getElementById("list-barang")

    listBarang.innerHTML = "";

    for (let i = 0; i < dataBarang.length; i++) {
      var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>"
      var btnHapus = `<a href="#" onclick="deleteBarang(${i})">Hapus</a>`
      console.log(btnEdit);
      listBarang.innerHTML += `<li>${dataBarang[i]} [${btnEdit} | ${btnHapus}]</li>`
      console.log(listBarang);
    }
}
function addBarang(){
  var input = document.querySelector("input[name=barang]").value

  dataBarang.push(input)
  showBarang()
}

function editBarang(id){
  var newbarang = prompt("nama baru",dataBarang[id])
  dataBarang[id] = newbarang
  showBarang()
}

function deleteBarang(id){
  dataBarang.splice(id,1)
  console.log(id);
  showBarang()
}

showBarang()