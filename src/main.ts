import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="circle-container">
    <div class="circle">
      <button id="close">
      <i class="fas fa-times-circle"></i>
      </button>
      <button id="open">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </div>
  <div class="content">
    <h1 class="">Amazing Article</h1>
    <small> Pop</small>
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo beatae obcaecati quia doloremque? Doloremque magni voluptates rem, commodi doloribus quod voluptatibus ratione repellat tenetur ex, ullam cupiditate nostrum cum sequi odio, recusandae excepturi repellendus earum et. Modi doloremque suscipit est harum aliquid saepe ducimus, eaque, qui impedit eum id nulla libero doloribus consequuntur iusto. Quasi facilis molestias voluptas illo, fugiat laboriosam debitis perferendis unde maiores. Architecto consequuntur repudiandae facilis minus vel eos eaque ut in, vitae, pariatur fugit nam aut autem! Voluptatem enim laborum placeat velit inventore nam accusamus assumenda rem eum, nemo eligendi aliquam harum porro ducimus? Provident, reprehenderit.
    </p>
    <h3>My Dog</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo beatae obcaecati quia doloremque? Doloremque magni voluptates rem, commodi doloribus quod voluptatibus ratione repellat tenetur ex, ullam cupiditate nostrum cum sequi odio, recusandae excepturi repellendus earum et. Modi doloremque suscipit est harum aliquid saepe ducimus, eaque, qui impedit eum id nulla libero doloribus consequuntur iusto. Quasi facilis molestias voluptas illo, fugiat laboriosam debitis perferendis unde maiores. Architecto consequuntur repudiandae facilis minus vel eos eaque ut in, vitae, pariatur fugit nam aut autem! Voluptatem enim laborum placeat velit inventore nam accusamus assumenda rem eum, nemo eligendi aliquam harum porro ducimus? Provident, reprehenderit.</p>
  </div>
  <nav>
    <ul>
      <li><i class="fas fa-home"></i>Home</li>
      <li><i class="fas fa-user-secret"></i>About</li>
      <li><i class="fas fa-envelope"></i>Contact</li>
    </ul>
  </nav>
`

const open = document.getElementById('open') as HTMLDivElement
const close = document.getElementById('close') as HTMLDivElement
const container = document.querySelector('.container') as Element | null

open?.addEventListener('click', () => container?.classList.add('show-nav'))
close?.addEventListener('click', () => container?.classList.remove('show-nav'))