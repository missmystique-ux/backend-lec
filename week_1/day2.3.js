// project with async await.
const sayPashma = function () {
    console.log("Pashma")
}

const changeText = function () {
     document.querySelector('h1').
innerHTML = "Best JS series"
}
const changeMe = setTimeout(changeText,2000)
// clearTimeout(changeMe)
document.querySelector('#stop').
addEventListener("click", function () {
    clearTimeout(changeMe)
    console.log("stopped")
})

//table project
const insert = document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `<div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`
})