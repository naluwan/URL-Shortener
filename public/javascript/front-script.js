const copyBtn = document.querySelector('#copyBtn')

function copyUrl() {
  const urlResult = document.querySelector('#urlResult')
  window.getSelection().selectAllChildren(urlResult)
  document.execCommand('copy')
  alert('複製成功')
}

copyBtn.addEventListener('click', event => {
  const target = event.target
  if (target) {
    copyUrl()
  }
})