let fruits = [
  {
    id: 1,
    title: "Яблоки",
    price: 100,
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 2,
    title: "Апельсины",
    price: 150,
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    title: "Манго",
    price: 200,
    img: "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const toHtml = fruit =>  `
    <div class="col">
        <div class="card">
            <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}" style="height: 350px;">
            <div class="card-body">
                <p class="card-text">${fruit.title}</p>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
            </div>
        </div>
    </div>
    `;

function render() {
//   const html = fruits.map(fruit => toHtml(fruit)); ИЛИ:
  const html = fruits.map(toHtml).join('');
  document.querySelector("#fruits").innerHTML = html;
};

render();

const modalPrice = $.modal({
    title: "Цена на товар",
    closable: true,
    width: "350px",
    footerBattons: [
      {
        text: "Закрыть",
        type: "btn-danger",
        handler() {
          modalPrice.close();
        },
      },
    ],
  });

const modalConfirm = $.modal({
    title: "Вы уверены?",
    closable: true,
    width: "350px",
    footerBattons: [
      {
        text: "Отменить",
        type: "btn-secondary",
        handler() {
            modalConfirm.close();
        },
      },
      {
        text: "Удалить",
        type: "btn-danger",
        handler() {
            modalConfirm.close();
        },
      }
    ],
  });

document.addEventListener('click', event => {
    event.preventDefault();
    const id = +event.target.dataset.id;
    const btnType = event.target.dataset.btn;
    const fruit = fruits.find(f => f.id === id);
    
    if (btnType === 'price') {
        modalPrice.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}руб.</strong></p>
        `);
        modalPrice.open();
    } else if (btnType === 'remove') {
        $.confirm({
            title: "Вы уверены?",
            content: `<p>Вы удаляете товар: <strong>${fruit.title} </strong></p>`
        })
        .then(() => {
            fruits = fruits.filter(el => el.id !== id);
            render();
        })
        .catch(() => {
            console.log("Cancel");
        })
    }
})

const modal = $.modal({
  title: "My modal",
  closable: true,
  content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    `,
  width: "400px",
  footerBattons: [
    {
      text: "Ok",
      type: "btn-primary",
      handler() {
        modal.close();
      },
    },
    {
      text: "Cancel",
      type: "btn-danger",
      handler() {
        modal.close();
      },
    },
  ],
});

const modalBtn = document.querySelector("#modal-win");

modalBtn.addEventListener("click", () => {
  modal.open();
});
