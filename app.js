const elementoResposta = document.querySelector('#resposta')
const inputpergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  'Non, kontinye travay parese',
  'Wi, gen posiblite pou sa fèt',
  'Poze bon kesyon 😂',
  'Jezi Selman ki ka reponn Kesyon sa😇',
  'Pa gen dout nan sa',
  'Wi,difinitivman ou preske echwe nan lavi a 😟 ',
  'Siw poko gen Paspò al fèl met la api tann pou wè',
  'Kontinye travay epi priye🙏',
  'Ou manke la fwa, sa vinn fè m paka reponn ou kesyon sa',
  'Chans ou lou anpil wi ou konn sa?',
  'Poze yon bon kesyon ok 😡',
  'Sa ka rive wi😎',
  'Sispann mande moun met minit pou ou epi laviw ap chanje👍',
  'Al aprann on metye, olyew pase jounnen nan jènn ap priye',
  'Mete Bondye an premye nan tout saw pwal regle epi tann rezilta',
  'Al aprann on metye pito 🧠',
  'Sispann fè krèy epi tout bagay ap mache',
  'Siw kontinye wap rive wi',
  'sa ka fèt wi, men fow travay pou sa💪',
  'Sispann pawaze devan pòt fo zanmi epi laviw ap chanje',
  'Fon ti kanpe sou Porno a epi anpil bagay ap chanje',
  'Obstak yo kreze deja, rete ou menm ki pou met prencip nan laviw',
  'lap difisil anpil wi, men lap pi difisil siw kontinye pale moun mal.',
  'Wap mal pase la wi😭 '
]

function fazerPergunta() {
  if (inputpergunta.value == '') {
    alert('Poze yon kesyon')
    return
  }
  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputpergunta.value + '</div>'

  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // Sumir a resposta depois de 3 segundo

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
