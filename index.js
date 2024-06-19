// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
// MESSAGES
const messagesNitification = document.querySelector
    ('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messagesSearch = document.querySelector('#message-search');

//remove active class from all menu item

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display = 'none';
        }
    })
})

const searchMessages = () => {
    const val = messagesSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleUpperCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        }
    })
}

messagesSearch.addEventListener('keyup, searchMessages')


messagesNitification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNitification.querySelector('.notifications-count').style.display
        = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



